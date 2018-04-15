const { GraphQLServerLambda } = require('graphql-yoga');
const { resolvers } = require('./graphql/resolvers');
const lambda = new GraphQLServerLambda({
  typeDefs: './graphql/schema.graphql',
  resolvers,
});
exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
