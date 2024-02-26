import { gql } from "@apollo/client/core";
import { client } from "../apolloClient.js"
import _ from "lodash-es";
import { GetTemplateCardsQuery } from "../../../generated/graphql.js";

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
  const getTemplateCardsResult = await client.query<GetTemplateCardsQuery>({
    query: GET_TEMPLATE_CARDS,
    variables: { deckTemplate_id },
  });
  getTemplateCardsResult.data.DeckTemplateCard[0].name
  const cards = _.get(getTemplateCardsResult, "data.DeckTemplateCard");
  return cards;
}
