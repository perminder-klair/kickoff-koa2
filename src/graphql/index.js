import { makeExecutableSchema } from 'graphql-tools';
import { extend } from 'underscore';

import UsersSchema from './users/schema';
import UsersResolvers from './users/resolvers';

export default makeExecutableSchema({
  typeDefs: [UsersSchema],
  resolvers: extend(UsersResolvers),
});
