import { GraphQLServer } from 'graphql-yoga';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import { join } from 'path';
import { IResolvers } from './generated/graphql';

const resolvers: IResolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
};

const types = fileLoader(join(__dirname, 'graphql'));

const server = new GraphQLServer({ typeDefs: mergeTypes(types), resolvers });
server.start(() => console.log('Server is running on http://localhost:4000'));
