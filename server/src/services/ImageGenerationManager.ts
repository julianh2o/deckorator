import { JobType, Queue, QueueEvents, Worker } from 'bullmq';
import * as comfyui from '../utils/comfyui.js';
import _ from "lodash";
import { DeckModel, DeckCardModel, GenerationModel, TarotCardFactory } from './CardFactory.js';
import { insertGeneratedImages } from '../utils/hasura/mutation/insertGeneratedImages.js';

const tarotFactory = new TarotCardFactory();

const QUEUE_NAME = "Generation";
const JOB_NAME = "ImageGenerationJob";
const ALL_STATUSES: JobType[] = ["completed", "failed", "delayed", "active", "wait", "waiting-children", "prioritized", "paused", "repeat"];
const [REDIS_HOST, REDIS_PORT] = (process.env.REDIS_ADDRESS ?? "").split(":");

class ImageGenerationManager {
    queue: Queue;
    queueEvents: QueueEvents;
    worker: Worker;
    constructor() {
        this.queue = new Queue(QUEUE_NAME, { connection: { host: REDIS_HOST, port: parseInt(REDIS_PORT) } });
        this.queueEvents = new QueueEvents(QUEUE_NAME);
        this.worker = new Worker(QUEUE_NAME, async job => {
            const { deck, card, generation } = job.data as { deck: DeckModel, card: DeckCardModel, generation: GenerationModel };
            const generationParams = tarotFactory.getDiffusionParameters(deck, card, generation);
            const images = await comfyui.runImageWorkflow(generationParams.workflow, _.omit(generationParams, "workflow"));
            await insertGeneratedImages(generation.id, "art", images);
        }, { connection: { host: REDIS_HOST, port: parseInt(REDIS_PORT) } });
        // this.worker.on('completed', job => {
        //     console.log(`${job.id} has completed!`);
        // });

        // this.worker.on('failed', (job, err) => {
        //     console.log(`${job!.id} has failed with ${err.message}`);
        // });
    }

    async queueGenerate(deck: DeckModel, card: DeckCardModel, generation: GenerationModel) {
        const job = await this.queue.add(JOB_NAME, {
            deck,
            card,
            generation
        });
        return job.id;
    }

    async waitForJobs(ids: string[]) {
        for (const id of ids) {
            const job = await this.queue.getJob(id);
            if (!job) continue;
            await job?.waitUntilFinished(this.queueEvents);
        }
    }

    async getJobs() {
        return this.queue.getJobs(ALL_STATUSES, 0, 100, true);
    }

    async destroy() {
        await this.queue.close();
        await this.worker.close();
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

export default new ImageGenerationManager();