import minio from './minio.js';
import axios from 'axios';
import _ from "lodash";
import p from "p-iteration";
import * as utils from "./utils";

const COMFYUI_HOST = process.env.COMFYUI_HOST;

type Workflow = any;
type OutputImage = any;

export function readParameterMapping(workflow: Workflow) {
    return workflow[0].fields;
}

export function applyOverrides(inputWorkflow: Workflow, params: { [key: string]: any }) {
    const workflow = _.cloneDeep(inputWorkflow);
    const mapping = readParameterMapping(workflow);
    delete workflow["0"];
    for (const key of Object.keys(params)) {
        if (_.get(workflow, mapping[key]) === undefined) throw new Error(`Failed to apply param (${key}). Path (${mapping[key]}) not found`);
        _.set(workflow, mapping[key], params[key]);
    }
    return [workflow, mapping.output];
}

function createUrl(baseUrl: string, params: Record<string, any>): string {
    const queryParams = new URLSearchParams();

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            queryParams.append(key, params[key]);
        }
    }

    return `${baseUrl}?${queryParams.toString()}`;
}

export async function queue(prompt: Workflow) {
    try {
        const data = await axios.post(`${COMFYUI_HOST}/prompt`, { prompt }, { headers: { 'Content-Type': 'application/json' } });
        return data.data.prompt_id;
    } catch (cause) {
        throw new Error("Failed to queue workflow..", { cause })
    }
}

export async function awaitResult(id: number, timeout_ms: number = 30000) {
    const timeoutAfter = new Date().getTime() + timeout_ms;
    while (true) {
        const [res, err] = await utils.unwrapAsync<any>(axios.get(`${COMFYUI_HOST}/history/${id}`));
        if (err) throw new Error("Failed to get history from ComfyUI API");
        const status = res.data[id];
        if (!status) {
            if (new Date().getTime() > timeoutAfter) throw new Error("Workflow timed out");
            await new Promise(resolve => setTimeout(resolve, 1000))
            continue;
        }
        return status;
    }
}

export async function runImageWorkflow(template: string, params: { [key: string]: any }) {
    const defaultParams = {
        seed: Math.floor(Math.random() * 99999999999),
        prefix: "windmill",
    };

    const buf = await minio.fetch(template);
    let templateJson = null;
    try {
        templateJson = JSON.parse(buf.toString());
    } catch (e) {
        throw new Error("Invalid workflow template (JSON parse error)");
    }
    const useParams = { ...defaultParams, ...params };
    const [workflow, outputPath] = applyOverrides(templateJson, useParams);
    const timestamp = new Date().getTime();
    await minio.put(Buffer.from(JSON.stringify(workflow, undefined, 2)), `logs/${timestamp}.run.json`);

    const prompt_id = await queue(workflow);
    const result = await awaitResult(prompt_id, 120000);
    if (!result) throw new Error(`Got null result for ${prompt_id}`)
    await minio.put(Buffer.from(JSON.stringify(result || {}, undefined, 2)), `logs/${timestamp}.result.json`);
    const images = _.get(result, outputPath);
    if (!images) throw new Error(`Output not found: ${outputPath} (${COMFYUI_HOST}/history/${prompt_id})`);
    const results = await p.mapSeries(images, async (img: OutputImage, index: number) => {
        const useName = images.length > 1 ? `images/${useParams.seed}_${prompt_id}_${index + 1}_${images.length}` : `images/${prompt_id}`
        return minio.importImageFromURL(createUrl(`${COMFYUI_HOST}/view`, img), useName);
    });
    return results;
}