import OpenAI from "openai";
import _ from "lodash";
import retry from "async-retry";
import fs from 'fs/promises'
import path from 'path'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const getDefaultOpts = async () => ({
    "mode": "openai",
    "system": "You are helpful assistant.",
    "max_tokens": 1000,
    "temperature": 1,
    "top_p": 0.9,
    "model": "gpt-3.5-turbo",
    "retries": 3,
    "parseJson": false,
});

async function getConfiguration(mode: string) {
    return {
        "local": {
            apiKey: "",
            baseURL: `http://192.168.0.66:5000/v1/`,
        },
        "openai": {
            apiKey: OPENAI_API_KEY
        }
    }[mode];
}

type ChatCompletionOpts = {
    mode?: string,
    model?: string,
    system?: string,
    max_tokens?: number,
    temperature?: number,
    top_p?: number,
    retries?: number,
    parseJson?: boolean,
}

type ChatCompletionMessage = {
    role: "system" | "user",
    content: string,
}

export async function chatCompletion(messages: ChatCompletionMessage[], providedOpts: ChatCompletionOpts = {}) {
    const opts = Object.assign({}, await getDefaultOpts(), providedOpts);
    const openai = new OpenAI(await getConfiguration(opts.mode));
    return retry(async () => {
        const completion = await openai.chat.completions.create({
            messages,
            ..._.pick(opts, "max_tokens", "temperature", "top_p", "model"),
        });
        if (!completion.choices[0].message.content) throw new Error("Error retrieving chat completion")

        const body = completion.choices[0].message.content;
        if (opts.parseJson) return JSON.parse(body);
        return body;
    }, { retries: opts.retries })
}


export const readTemplate = async (template: string) => {
    const contents = await fs.readFile(
        path.join(process.env.APP_DIR, `./src/${template}`),
        'utf-8'
    )
    return (context: any) => {
        const evaluatedContent = _.template(contents)({ _, ...context })
        const lines = evaluatedContent.split('\n')
        const messages: ChatCompletionMessage[] = []
        let currentMessage: ChatCompletionMessage | null = null
        for (const line of lines) {
            if (line.startsWith('# ')) {
                if (currentMessage) messages.push(currentMessage)
                const role = line.split(' ')[1];
                if (!["system", "user"].includes(role)) throw new Error("Invalid role: " + role);
                currentMessage = { role: role as "system" | "user", content: '' }
            } else if (currentMessage) {
                currentMessage.content += line + '\n'
            }
        }
        if (currentMessage) messages.push(currentMessage)
        return messages
    }
}

export const execTemplate = async (template: string, context: any) => {
    const f = await readTemplate(template)
    return f(context)
}