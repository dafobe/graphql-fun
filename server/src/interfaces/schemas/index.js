const graphql = require('graphql');
const game = require('./game');

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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        game: {
            type: game,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args){
                const {id} = args;
                return GAMES_LIST[id]
            }
        },
        games: {
            type: new GraphQLList(game),
            resolve(){
                return GAMES_LIST
            }
        }
    }
});

const graphQLSchema = new GraphQLSchema({
    query: RootQuery
});

module.exports = graphQLSchema;