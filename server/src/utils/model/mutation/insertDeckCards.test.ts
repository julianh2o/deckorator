import { gql } from "@apollo/client/core";
import { client } from "../apolloClient.js"
import _ from "lodash";
import { getTemplateCards } from "../query/getTemplateCards.js";

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


test('insertDeckCards', async () => {
  const res = await client.mutate({ mutation: CreateDeckTemplateWithCard });
  const id = _.get(res, "data.insert_DeckTemplate.returning[0].id");
  const cards = await getTemplateCards(id);
  expect(cards.length).toBe(1);
  expect(cards[0].name).toBe("Test Card");
});