import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const HASURA_ENDPOINT = process.env.HASURA_ENDPOINT;

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: HASURA_ENDPOINT,
});