import * as minio from 'minio';
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash";
import { fileTypeFromBuffer } from 'file-type';
import axios from "axios";
import p from "p-iteration";
import * as utils from "./utils";

const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY!;
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY!;

class Minio {
    client: minio.Client;
    constructor(accessKey: string, secretKey: string) {
        this.client = new minio.Client({
            endPoint: '192.168.0.200',
            useSSL: false,

            port: 9000,
            accessKey,
            secretKey,
        })
    }

    public resolveResourcePath(name?: string): [string, string | null] {
        const defaultBucket = "files";
        if (!name) {
            return [defaultBucket, null];
        } else if (name.endsWith("/")) {
            return [name.substring(0, name.length - 1), null];
        } else if (!name.includes("/")) {
            return [defaultBucket, name];
        } else {
            const [first, ...remain] = name.split("/");
            return [first, remain.join("/")];
        }
    }

    public async fetch(name: string) {
        const [bucket, fileName] = this.resolveResourcePath(name);
        try {
            const stream = await this.client.getObject(bucket, fileName!);
            const buffers = [];

            // node.js readable streams implement the async iterator protocol
            for await (const data of stream) {
                buffers.push(data);
            }
            const buf = Buffer.concat(buffers);
            return buf;
        } catch (err) {
            throw new Error(`Failed to minioFetch ${name}`, { cause: err });
        }
    }

    public async put(buffer: Buffer, name?: string) {
        try {
            const { mime, ext } = await fileTypeFromBuffer(buffer) || { mime: "text/plain", "ext": "txt" };
            if (!mime || !ext) throw new Error("Failed to determine mimetime for buffer");
            const [bucket, fileName] = this.resolveResourcePath(name);
            let useName = fileName ?? `${uuidv4()}.${ext}`;
            if (!useName.endsWith(ext)) useName = `${useName}.${ext}`;

            await this.client.putObject(bucket, useName, buffer, undefined, { "ContentType": mime });

            return bucket + "/" + useName;
        } catch (err) {
            console.log(err);
            throw new Error("Failed to save file from buffer", { cause: err })
        }
    }

    public async presigned(name: string | string[]) {
        const names = _.isArray(name) ? name : [name];
        return p.mapSeries(names, async (resourcePath: string) => {
            const [bucket, name] = this.resolveResourcePath(resourcePath);

            return this.client.presignedGetObject(bucket, name!, 24 * 60 * 60)
        });
    }

    public async bufferToDataURL(buf: Buffer) {
        const { mime } = await fileTypeFromBuffer(buf) || {};
        if (!mime) throw new Error("Failed to determine mime type for buffer");
        return `data:${mime}; base64, ${buf.toString("base64")} `;
    }

    public async importImageFromURL(url: string, name?: string) {
        const [buf, err] = await utils.unwrapAsync<Buffer>(axios.get(url, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data, 'binary')));
        if (err) throw new Error(`Failed to import image ${url} `, { cause: err })
        return this.put(buf!, name);
    }

    public async exists(resourcePath: string) {
        const [bucket, name] = this.resolveResourcePath(resourcePath);
        try {
            await this.client.statObject(bucket, name!);
            return true;
        } catch (err) {
            return false;
        }
    }
}


export default new Minio(MINIO_ACCESS_KEY, MINIO_SECRET_KEY);