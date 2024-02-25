import 'dotenv/config'
import express, { Express, Request, Response } from "express";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client/core";
import dotenv from "dotenv";
import fs from "fs";
import _ from "lodash";
import { chatCompletion, execTemplate } from './utils/gpt.js';
import minio from "./utils/minio.js";
import p from "p-iteration";
import { getTemplateCards } from './utils/model/query/getTemplateCards.js';
import { client } from './utils/model/apolloClient.js';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;
// Triggered when a new Deck is inserted
// This inserts a full deck of cards based on the specified DeckTemplate
app.post("/populateDeckFromTemplate", async (req: Request, res: Response) => {
  const { id: deck_id, deckTemplate_id } = req.body.event.data.new;
  const cards = await getTemplateCards(deckTemplate_id);

  let index = 1;
  const inserts = _.map(cards, (card) => ({
    index: index++,
    name: card.name,
    deck_id,
    deckTemplateCard_id: card.id,
    config: card.config
  }));

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

const CreateDeckTemplateWithCard = gql`
mutation CreateDeckTemplateWithCard {
  insert_DeckTemplate(objects: {
    name: "Test Deck Template",
    DeckTemplateCards: {
      data: {
        index: 1,
        name: "Test Card"
      }
    }
  }) {
    returning {
      id
    }
  }
}
`;

app.get("/", async (req: Request, res: Response) => {
  const out = await client.mutate({ mutation: CreateDeckTemplateWithCard });
  console.log(out);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
