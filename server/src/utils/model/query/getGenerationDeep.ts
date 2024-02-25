import { gql } from "@apollo/client/core";
import { client } from "../apolloClient.js"
import _ from "lodash-es";

const GET_GENERATION_DEEP = gql`
query GetGenerationDeep($id: Int!) {
  Generation_by_pk(id: $id) {
    DeckCard {
      Deck {
        id
        name
        deckTemplate_id
      }
      id
      deck_id
      deckTemplateCard_id
      name
      index
      config
    }
    GeneratedImages {
      id
      image
      type
    }
  }
}
`;

export const getGenerationDeep = async (id: number) => {
  const getTemplateCardsResult = await client.query({
    query: GET_GENERATION_DEEP,
    variables: { id },
  });
  return getTemplateCardsResult.data.Generation_by_pk;
}
