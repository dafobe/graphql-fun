const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

module.exports = new GraphQLObjectType({
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