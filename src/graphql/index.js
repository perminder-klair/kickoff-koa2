import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import MainSchema from './main/schema';
import MainResolvers from './main/resolvers';
import UsersSchema from './users/schema';
import UsersResolvers from './users/resolvers';

export default makeExecutableSchema({
  typeDefs: mergeTypes([MainSchema, UsersSchema]),
  resolvers: mergeResolvers([MainResolvers, UsersResolvers]),
});
