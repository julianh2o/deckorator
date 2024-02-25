import { gql } from "@apollo/client/core";
import { client } from "../apolloClient.js"
import _ from "lodash";
import { getTemplateCards } from "../query/getTemplateCards.js";




test('getGenerationDeep', async () => {
  const res = await client.mutate({ mutation: CreateTestCardDeckGeneration });
  console.log(res);
  const id = _.get(res, "data.insert_Deck.returning[0].id");
  const cards = await getTemplateCards(id);
  expect(cards.length).toBe(1);
  expect(cards[0].name).toBe("Test Card");
});