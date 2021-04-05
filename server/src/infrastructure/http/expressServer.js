
import express from 'express';
const expressRouter = express.Router();
import {routeConfig as healthcheckConfig} from '../../interfaces/routes/healthcheck.js';
import {routeConfig as helloRoutesConfig} from '../../interfaces/routes/hello.js';
import {routeConfig as graphqlConfig} from '../../interfaces/routes/graphql.js';
const PORT_DEFAULT = 4000;


const configRoute = (router) => (config) => {
  const {method, path, handler} = config;

  return router[method.toLocaleLowerCase()](path, handler);
}

const routesGenerator = (router, routesConfig = []) => {
  routesConfig.forEach( configRoute(router))
  return router;
}

export const createServer = async ({PORT = PORT_DEFAULT, HOSTNAME = '0.0.0.0'}) => {
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