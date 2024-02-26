import { gql } from "@apollo/client/core";
import { client } from "../apolloClient.js"
import _ from "lodash-es";

const INSERT_DECK_CARDS = gql`
  mutation InsertDeckCards($cards: [DeckCard_insert_input!]!) {
    insert_DeckCard(objects: $cards) {
      returning {
        id
      }
    }
  }
`;

export const insertDeckCards = async (inserts: any[]) => {
  const mutationResult = await client.mutate({
    mutation: INSERT_DECK_CARDS,
    variables: { cards: inserts }
  });
  if (mutationResult.errors && mutationResult.errors.length) throw new Error("Error during InsertDeckCards: " + _.map(mutationResult.errors, "message"))
  return _.map(mutationResult.data.returning, "id");
}
