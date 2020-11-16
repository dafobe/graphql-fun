const graphqlHTTP = require('express-graphql');
const graphQLSchema = require('../schemas/index');


const routeConfig = {
  name: 'graphql',
  version: '0.0.1',
  mainPath: '/graphql',
  route:{
        method: 'GET',
        path: '/:type',
        handler: graphqlHTTP({
            schema: graphQLSchema,
            graphiql: true
        }),
    }
};

module.exports = routeConfig;