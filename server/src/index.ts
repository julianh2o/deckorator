import 'dotenv/config'
import express, { Express, Request, Response } from "express";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client/core";
import dotenv from "dotenv";
import fs from "fs";
import _ from "lodash";
import { chatCompletion, execTemplate } from './utils/gpt.js';
import * as comfyui from './utils/comfyui.js';
import minio from "./utils/minio.js";

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const HASURA_ENDPOINT = process.env.HASURA_ENDPOINT;

const GET_TEMPLATE_CARDS = gql`
  query GetTemplateCards($deckTemplate_id: Int) {
    DeckTemplateCard(where: { deckTemplate_id: { _eq: $deckTemplate_id } }) {
      id
      index
      name
      config
    }
  }
`;

const INSERT_DECK_CARD = gql`
  mutation InsertDeckCard($cards: [DeckCard_insert_input!]!) {
    insert_DeckCard(objects: $cards) {
      returning {
        id
      }
    }
  }
`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: HASURA_ENDPOINT,
});

// Triggered when a new Deck is inserted
// This inserts a full deck of cards based on the specified DeckTemplate
app.post("/populateDeckFromTemplate", async (req: Request, res: Response) => {
  const { id: deck_id, deckTemplate_id } = req.body.event.data.new;
  const getTemplateCardsResult = await client.query({
    query: GET_TEMPLATE_CARDS,
    variables: { deckTemplate_id },
  });
  const cards = _.get(getTemplateCardsResult, "data.DeckTemplateCard");
  let index = 1;
  const inserts = _.map(cards, (card) => ({
    index: index++,
    name: card.name,
    deck_id,
    deckTemplateCard_id: card.id,
    config: card.config
  }));
  await client.mutate({
    mutation: INSERT_DECK_CARD,
    variables: { cards: inserts }
  });
  res.sendStatus(200);
});

type GenerationModel = {
  id: number;
  created_at: string;
  updated_at: string;
  batch: string;
  derivedFrom: number | null;
  card_id: number;
  prompt: string | null;
  variationText: string | null;
  config: string | null;
};



// Triggered when a new Deck is inserted
// This inserts a full deck of cards based on the specified DeckTemplate
app.post("/insertGeneration", async (req: Request, res: Response) => {
  await fs.promises.writeFile("./insertGeneration.json", JSON.stringify(req.body, undefined, 2));
  console.log("insertGeneration called");
  const generation = req.body.event.data.new as GenerationModel;
  // const getTemplateCardsResult = await client.query({
  //   query: GET_TEMPLATE_CARDS,
  //   variables: { deckTemplate_id },
  // });
  // const cards = _.get(getTemplateCardsResult, "data.DeckTemplateCard");
  // let index = 1;
  // const inserts = _.map(cards, (card) => ({
  //   index: index++,
  //   name: card.name,
  //   deck_id,
  //   deckTemplateCard_id: card.id,
  //   config: card.config
  // }));
  // await client.mutate({
  //   mutation: INSERT_DECK_CARD,
  //   variables: { cards: inserts }
  // });
  res.sendStatus(200);
});

app.get("/testGpt", async (req: Request, res: Response) => {
  const prompt = await execTemplate("prompts/tarot.tmpl", {
    keys: ["prompt"],
    params: {
      count: 3,
      subject: "The Fool, from tarot"
    }
  });
  const out = await chatCompletion(prompt, { parseJson: true });
  res.send(`<pre>${JSON.stringify(out, undefined, 2)}</pre>`);
});

app.get("/", async (req: Request, res: Response) => {
  const out = await comfyui.runImageWorkflow("resources/sdxl_api2.json", {
    linguistic: "emma watson in a library",
    positive: "sexy librarian 3d render",
    negative: "blurry",
    width: 1008, height: 1440,
    batch_size: 3,
  });
  res.send(out);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
