# GraphQL Query

This project use Apollo Server to integrate GraphQL
## Features

- [**React**](https://reactjs.org/) 16.4.1
- [**React-Router**](https://www.npmjs.com/package/react-router) 4.2.0
- Server-side rendering with [**React Router**](https://github.com/ReactTraining/react-router) 4.x.
- [**Redux**](http://redux.js.org/) predictable state containers.
- Hot reloading using [**Webpack HMR**](https://webpack.js.org/concepts/hot-module-replacement/).
- [**Apollo-GraphQL**](https://www.apollographql.com/)
- [**Webpack 3**](https://webpack.js.org/) for both development and production bundles.
- Responsive front-end interface with [**Bootstrap 3**](http://getbootstrap.com/).
- [**Express**](http://expressjs.com/) 4.x server.

## Quickstart

```
git clone https://github.com/forstleblue/GraphQLTest.git your_app
cd your_app
npm install
npm run start
```

## Available Commands

`npm run start` - starts the development server.
Oen http://localhost:4000/
`npm run eslint` Run eslint

http://localhost:4000/graphiql

## File Structure

### Webpack Config

Webpack for bundling modules. Configuration file is `webpack.config.js`

### Server

It uses Express framework.

If `NODE_ENV` is development, we apply Webpack middlewares for bundling and Hot Module Replacement.

### Client

The `app` directory contains all the shared components, routes and reducers.
`action` folder have all actions for fetching data.
`reducers` folder have app holds app state
`routes` have all routing for this app
`store` for redux store
The `server` runs node js server

## ScreenShot

![Alt text](app/screen/screen1.png?raw=true 'Graph QL Server')
![Alt text](app/screen/screen2.png?raw=true 'GraphiQL with param')

