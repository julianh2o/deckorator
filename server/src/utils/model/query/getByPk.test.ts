import { DocumentNode, gql } from "@apollo/client/core";
import { client } from "../apolloClient.js"
import _ from "lodash";
import { getByPk } from "./getByPk.js";
import { Deck_By_PkQuery, Deck_By_PkQueryVariables } from "../../../generated/client/graphql.js";
import { Deck_By_PkDocument } from "../../../generated/client/graphql.js";


test('Get Deck', async () => {
    const res = await client.query({ query: Deck_By_PkDocument, variables: { id: 14 } });
    console.log(res.data.Deck_by_pk?.DeckCards);
});