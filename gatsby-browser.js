import "./src/styles/global.scss";

import React from "react";
import PropTypes from "prop-types";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: process.env.GATSBY_GRAPHQL_API_ENDPOINT,
});

const client = new ApolloClient({
  cache,
  link,
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.element.isRequired,
};
