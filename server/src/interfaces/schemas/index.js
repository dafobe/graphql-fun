const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const GAMES_LIST = [
    {id: '1', name: 'Catan'},
    {id: '2', name: 'Gloomhaven'}
];

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        game: {
            type: GameType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args){
                const {id} = args;
                return GAMES_LIST[id]
            }
        }
    }
});

const graphQLSchema = new GraphQLSchema({
    query: RootQuery
});

module.exports = graphQLSchema;