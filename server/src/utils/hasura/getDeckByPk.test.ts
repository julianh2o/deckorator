import { DocumentNode, gql } from "@apollo/client/core";
import { client } from "./apolloClient.js"
import _ from "lodash";
import { Deck_By_PkDocument } from "../../generated/client/graphql.js";


test('Get Deck', async () => {
    const res = await client.query({ query: Deck_By_PkDocument, variables: { id: 14 } });
});