import { makeExecutableSchema } from 'graphql-tools';
import { extend } from 'underscore';

import CustomersSchema from './customers/schema';
import CustomersResolvers from './customers/resolvers';

export default makeExecutableSchema({
    typeDefs: [CustomersSchema],
    resolvers: extend(CustomersResolvers),
});
