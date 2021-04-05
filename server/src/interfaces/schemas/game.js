import graphql from 'graphql';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID
} = graphql;

const GAMES_LIST = [
    {id: '1', name: 'Catan'},
    {id: '2', name: 'Gloomhaven'}
];

export const gameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            type: { type: GraphQLString },
            category: { type: GraphQLString },
            mehanisms: { type: GraphQLString },
            family: { type: GraphQLString },
        }
    }
});

export const game = {
    type: gameType,
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args){
        const {id} = args;
        return GAMES_LIST[id]
    }
}

export const gameList = {
    type: new GraphQLList(gameType),
    resolve(){
        return GAMES_LIST
    }
}