import { parse } from 'yaml'
import path from 'path';
import fs from 'fs/promises';

export interface DeckTemplate {
    cards: DeckTemplateCard[]
}

export interface DeckTemplateCard {
    id: number;
    name: string;
    subject: string;
    layout: string;
    TEXT_TOP: string;
    TEXT_BOTTOM: string;
    TEXT_LEFT?: string;
    TEXT_RIGHT?: string;
    icon_topleft: string;
    cardframe: string;
}

export async function loadDeckTemplate(name: string) {
    const rawFile = await fs.readFile(path.join(__dirname, "..", "deckTemplates", `${name}.yaml`), "utf-8");
    return parse(rawFile) as unknown as DeckTemplate;
}