import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import 'react-hot-loader/patch';
import { syncHistoryWithStore, push } from 'react-router-redux';
import createStore, { client } from './store';
import createRoutes from './routes';
import { AUTH_SIGNIN } from './actions';
const initialState = {};
const store = createStore(initialState);
let routes = createRoutes(store);

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    {routes}
  </ApolloProvider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    ReactDOM.render(
      <ApolloProvider store={store} client={client}>
        {routes}
      </ApolloProvider>,
      document.getElementById('app'),
    );
  });
}
