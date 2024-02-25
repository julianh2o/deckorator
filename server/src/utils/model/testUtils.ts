import { DocumentNode } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { client } from "./apolloClient";
import _ from "lodash";

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

const CreateTestCardDeckGeneration = gql`
mutation CreateTestCardDeckGeneration {
  insert_Deck(objects: {
    name: "test deck",
    deckTemplate_id: 0,
    DeckCards: {
      data: {
        Generations: {
          data: {
            batch: "123abc",
            config: "{}",
            prompt: "a person eating an apple",
            GeneratedImages: {
              data: {
                image: "resource/test.png",
                type: "art"
              }
            }
          }
        }
      }
    }
  }) {
    returning {
      id
      DeckCards {
        id
        Generations {
          id
        }
      }
    }
  }
}
`;

export async function doSingleReturningMutation(mutation: DocumentNode) {
    const res = await client.mutate({ mutation });
    const key = _.first(Object.keys(res.data));
    return res.data[key!].returning[0].id;
}

export async function bootstrap() {
    const deckTemplate_id = await doSingleReturningMutation(CreateDeckTemplateWithCard);
    console.log({ deckTemplate_id });
}