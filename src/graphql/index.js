import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import UsersSchema from './users/schema';
import UsersResolvers from './users/resolvers';

export default makeExecutableSchema({
  typeDefs: mergeTypes([UsersSchema]),
  resolvers: mergeResolvers([UsersResolvers]),
});
