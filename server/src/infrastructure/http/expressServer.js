
const express = require('express');
const expressRouter = express.Router();
const healthcheckConfig = require('../../interfaces/routes/healthcheck');
const helloRoutesConfig = require('../../interfaces/routes/hello');
const graphqlConfig = require('../../interfaces/routes/graphql');
const PORT_DEFAULT = 4000;


const configRoute = (router) => (config) => {
  const {method, path, handler} = config;

  return router[method.toLocaleLowerCase()](path, handler);
}

const routesGenerator = (router, routesConfig = []) => {
  routesConfig.forEach( configRoute(router))
  return router;
}

const createServer = async ({PORT = PORT_DEFAULT, HOSTNAME = '0.0.0.0'}) => {
  return new Promise((resolve, reject) => {
    const app = express();

    const helloRoutes = routesGenerator(expressRouter, helloRoutesConfig.routes);

    app.use(healthcheckConfig.mainPath, healthcheckConfig.route.handler);
    
    app.use(helloRoutesConfig.mainPath, helloRoutes);

    app.use(graphqlConfig.mainPath, graphqlConfig.route.handler);

    app.listen(PORT, HOSTNAME)
      .once('listening', resolve)
      .once('error', reject);

  })
};

module.exports = createServer;