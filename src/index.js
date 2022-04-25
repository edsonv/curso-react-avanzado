import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { AppProvider } from "./context/AppContext";

import { App } from "./App";

const httpLink = createHttpLink({
  uri: "https://petgram-server-gtrnb8zqu-edsonv.vercel.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location = "/";
    }
  }),
});

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById("app")
);
