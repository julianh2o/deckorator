import { authProvider } from "./authProvider";
import React, { useState, useEffect } from "react";
import buildHasuraProvider from "ra-data-hasura";
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import DeckView from "./DeckView";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import {
  DeckTemplateCreate,
  DeckTemplateShow,
  DeckTemplateEdit,
  DeckTemplateList,
} from "./resources/DeckTemplate";
import {
  DeckTemplateCardCreate,
  DeckTemplateCardShow,
  DeckTemplateCardEdit,
  DeckTemplateCardList,
} from "./resources/DeckTemplateCard";

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({ client });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;

  return (
    <ApolloProvider client={client}>
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource
          name="DeckTemplate"
          options={{ label: "Deck Templates" }}
          list={DeckTemplateList}
          show={DeckTemplateShow}
          edit={DeckTemplateEdit}
          create={DeckTemplateCreate}
        />
        <Resource
          name="DeckTemplateCard"
          options={{ label: "Deck Template Cards" }}
          // list={DeckTemplateCardList}
          show={DeckTemplateCardShow}
          edit={DeckTemplateCardEdit}
          create={DeckTemplateCardCreate}
        />
        <CustomRoutes>
          <Route path="/deck" element={<DeckView id={8} />} />
        </CustomRoutes>
      </Admin>
    </ApolloProvider>
  );
};

export default App;
