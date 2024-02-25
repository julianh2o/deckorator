export type DiffusionParams = {
    workflow: string;
    linguistic: string;
    positive: string;
    negative: string;
    width: number;
    height: number;
    batch_size: number;
}

export type CardConfig = {
    textTop: string | null;
    textBottom: string | null;
    textLeft: string | null;
    textRight: string | null;
    imageTopLeft: string | null;
    imageTopRight: string | null;
    imageBottomLeft: string | null;
    imageBottomRight: string | null;
    imageArt: string | null;
    imageFrame: string | null;
}

export type DeckModel = {
    id: number;
    name: string;
    config: Partial<CardConfig>;
}

export type DeckCardModel = {
    id: number;
    index: number;
    name: string;
    config: Partial<CardConfig>;
}

export type GenerationModel = {
    id: number;
    prompt: string;
    variationText: string;
    config: Partial<CardConfig>;
}

export type GeneratedImageModel = {
    id: number;
    type: string;
    image: string;
}


export abstract class CardFactory {
    abstract getDiffusionParameters(deck: DeckModel, card: DeckCardModel, generation: GenerationModel): Partial<DiffusionParams>;
    abstract getCardConfig(deck: DeckModel, card: DeckCardModel, image: GeneratedImageModel): Partial<CardConfig>;
}

export class TarotCardFactory extends CardFactory {
    getDiffusionParameters(deck: DeckModel, card: DeckCardModel, generation: GenerationModel): DiffusionParams {
        return {
            workflow: "resources/sdxl_api2.json",
            linguistic: generation.prompt,
            positive: "",
            negative: "",
            width: 1008,
            height: 1440,
            batch_size: 3,
        }
    }
    getCardConfig(deck: DeckModel, card: DeckCardModel, image: GeneratedImageModel): CardConfig {
        return {
            textTop: card.name,
            textBottom: null,
            textLeft: null,
            textRight: null,
            imageTopLeft: null,
            imageTopRight: null,
            imageBottomLeft: null,
            imageBottomRight: null,
            imageArt: image.image,
            imageFrame: "resources/cardframe.png",
            ...deck.config,
            ...card.config,
        }
    }
}