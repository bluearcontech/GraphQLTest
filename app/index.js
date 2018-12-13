import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import 'react-hot-loader/patch';
import createStore, { client } from './store';
import createRoutes from './routes';

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
