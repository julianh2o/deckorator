import express, { Express, Request, Response } from "express";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client/core";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const HASURA_ENDPOINT = process.env.HASURA_ENDPOINT;

const GET_TEMPLATE_CARDS = gql`
  query GetTemplateCards($templateId: Int) {
    DeckTemplateCard(where: { deckTemplate_id: { _eq: $templateId } }) {
      id
      index
      name
      config
    }
  }
`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: HASURA_ENDPOINT,
});

app.post("/populateDeckFromTemplate", async (req: Request, res: Response) => {
  console.log(req.body);
  await fs.promises.writeFile(
    "./req.json",
    JSON.stringify(req.body, undefined, 2)
  );
  const results = await client.query({
    query: GET_TEMPLATE_CARDS,
    variables: { templateId: 1 },
  });
  console.log(results);
  res.send("Express + TypeScript Server");
});

app.get("/", async (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
