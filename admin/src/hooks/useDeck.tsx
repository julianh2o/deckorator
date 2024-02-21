import { useQuery, gql } from "@apollo/client";

const GET_DECK_QUERY = gql`
query GetDeck($id: Int!) {
    Deck_by_pk(id: $id) {
      id
      name
      deckTemplate_id
      DeckCards {
        id
        index
        name
        deckTemplateCard_id
        config
      }
    }
  }
  
`;

const useDeck = (id: number) => {
    const { loading, error, data } = useQuery(GET_DECK_QUERY, { variables: { id } });
    if (error) throw error;
    return [!loading && data.Deck_by_pk, { loading, error, data }]
};

export default useDeck;
