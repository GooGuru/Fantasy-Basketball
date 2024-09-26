import React from "react";
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navigation from "./components/Navigation";
import "./styles/App.css";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const App = () => {
  console.log("App render");
  return (
    <>
      <ApolloProvider client={client}>
        <Navigation />
        <Outlet />
      </ApolloProvider>
    </>
  );
};

export default App;
