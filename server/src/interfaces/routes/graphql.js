import graphqlHTTP from 'express-graphql';
import graphQLSchema from '../schemas/index.js'


export const routeConfig = {
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