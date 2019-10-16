import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

import { Main, List, Detail } from "./components";
import { GlobalStyle } from "./utils";
import { routes } from "./constants";

const client = new ApolloClient({
  uri: "https://pokemon-samdavies.stylindex.now.sh"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <BrowserRouter>
        <Main>
          <Route exact path={routes.BASE} component={List} />
          <Route exact path={routes.DETAIL} component={Detail} />
        </Main>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
