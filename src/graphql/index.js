import { makeExecutableSchema } from 'graphql-tools';
// import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import UsersSchema from './users/schema';
import UsersResolvers from './users/resolvers';

export default makeExecutableSchema({
  typeDefs: UsersSchema, // mergeTypes([UsersSchema]),
  resolvers: UsersResolvers, // mergeResolvers([UsersResolvers]),
});
