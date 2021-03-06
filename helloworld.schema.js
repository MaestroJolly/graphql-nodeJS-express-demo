"use strict";

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
              type: GraphQLString,
              resolve() {
                return 'world'
              },
            },
        }
    })
});

module.exports = schema;