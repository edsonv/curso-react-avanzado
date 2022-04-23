import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProvider } from "./context/AppContext";

import { App } from "./App";

const client = new ApolloClient({
  uri: "https://petgram-server-gtrnb8zqu-edsonv.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById("app")
);
