import { gql } from "@apollo/client/core";
import { client } from "../apolloClient.js"
import _ from "lodash-es";

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


export const getTemplateCards = async (deckTemplate_id: number) => {
  const getTemplateCardsResult = await client.query({
    query: GET_TEMPLATE_CARDS,
    variables: { deckTemplate_id },
  });
  const cards = _.get(getTemplateCardsResult, "data.DeckTemplateCard");
  return cards;
}
