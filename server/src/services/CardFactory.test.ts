import _ from "lodash";
import { DeckModel, DeckCardModel, GenerationModel, GeneratedImageModel, TarotCardFactory } from "./CardFactory.js";

const deckModelTestData: DeckModel = {
  id: 1,
  name: "Sample Deck",
  config: {
    textTop: "Sample Deck Text",
    imageArt: "deck_artwork.jpg"
  }
};

const deckCardModelTestData: DeckCardModel = {
  id: 1,
  index: 1,
  name: "Sample Card",
  config: {
    textTop: "Sample Card Text",
    imageFrame: "card_frame.jpg"
  }
};

const generationModelTestData: GenerationModel = {
  id: 1,
  prompt: "Sample Prompt",
  variationText: "Sample Variation",
  config: {
    textBottom: "Sample Generated Text",
    imageArt: "generated_artwork.jpg"
  }
};

const generatedImageModelTestData: GeneratedImageModel = {
  id: 1,
  type: "Sample Type",
  image: "generated_image.jpg"
};


test('getDiffusionParameters', async () => {
  const tarotFactory = new TarotCardFactory();
  const diffusionParams = tarotFactory.getDiffusionParameters(
    deckModelTestData, deckCardModelTestData, generationModelTestData
  )
  expect(diffusionParams).toMatchObject({
    workflow: 'resources/sdxl_api2.json',
    linguistic: 'Sample Prompt',
    positive: '',
    negative: '',
    width: 1008,
    height: 1440,
    batch_size: 3
  });
});

test("getCardConfig", async () => {
  const tarotFactory = new TarotCardFactory();
  const cardConfig = tarotFactory.getCardConfig(
    deckModelTestData, deckCardModelTestData, generatedImageModelTestData
  )
})
// const job = await imageGenerationManager.queueGenerate({
//   id: 72,
//   prompt: "emma watson in a library",
//   config: {
//     workflow: "resources/sdxl_api2.json",
//     linguistic: "emma watson in a library",
//     positive: "sexy librarian 3d render",
//     negative: "blurry",
//     width: 1008,
//     height: 1440,
//     batch_size: 3,
//   }
// });

// await imageGenerationManager.waitForJobs([job!]);

// imageGenerationManager.destroy();