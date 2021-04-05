import graphql from 'graphql';
import {gameList, game} from './game.js';

const {
    GraphQLObjectType,
    GraphQLSchema
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        game,
        games: gameList
    }
});

const graphQLSchema = new GraphQLSchema({
    query: RootQuery
});

export default graphQLSchema;