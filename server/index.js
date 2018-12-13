//requiring NPM modeles
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const { apolloExpress, graphiqlExpress } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');
const renderFullPage = require('../app/renderFullPage');

const { server } = require('./config');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const { getTokenFromRequest } = require('./utils/auth');

const app = express();
const schema = makeExecutableSchema({ typeDefs, resolvers });
var corsOptions = { origin: 'http://localhost:3000' };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());

app.use(
  '/graphql',
  bodyParser.json(),
  apolloExpress(request => ({
    schema,
    context: { token: getTokenFromRequest(request) },
  })),
);
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: 'https://core-graphql.dev.waldo.photos/pizza',
  }),
);

if (process.env.NODE_ENV === 'development') {
  //webpack configuration
  const config = require('../webpack.config.dev');
  const compiler = webpack(config);
  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
      },
    }),
  );
  //Enable hot-middleware
  app.use(require('webpack-hot-middleware')(compiler));
  //Set the client folder for front end
  app.use(express.static(path.resolve(__dirname, 'app')));
}

app.get('*', renderFullPage);

//Finally starting the listener
app.listen(server.port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('app is listening on port ' + server.port + '!');
  }
});
