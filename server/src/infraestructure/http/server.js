
const express = require('express');
const expressRouter = express.Router();
const graphqlHTTP = require('express-graphql');
const helloRoutesConfig = require('../../interfaces/routes/hello');
const PORT_DEFAULT = 4000;


const configRoute = (router) => (config) => {
  const {method, path, handler} = config;

  return router[method.toLocaleLowerCase()](path, handler);
}

const routesGenerator = (router, routesConfig = []) => {
  routesConfig.forEach( configRoute(router))
  return router;
}

const createServer = async (PORT = PORT_DEFAULT) => {
  return new Promise((resolve, reject) => {
    const app = express();

    const helloRoutes = routesGenerator(expressRouter, helloRoutesConfig.routes);
    app.use(helloRoutesConfig.mainPath, helloRoutes);

    app.listen(PORT)
      .once('listening', resolve)
      .once('error', reject);

  })
};

module.exports = createServer;