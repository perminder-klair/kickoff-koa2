import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import { makeExecutableSchema } from 'graphql-tools';

import User from '../service/user';

import graphqlSchema from '../graphql/schema.graphql';
import createResolvers from '../graphql/resolvers';

const router = new Router();

const executableSchema = makeExecutableSchema({
    typeDefs: [graphqlSchema],
    resolvers: createResolvers({ User }),
});

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
router.post('/graphql', graphqlKoa({ pretty: true, schema: executableSchema }));

const routes = router.routes();
const allowedMethods = router.allowedMethods({
    throw: true,
    notImplemented: () => new Errors.notImplemented(),
    methodNotAllowed: () => new Errors.methodNotAllowed(),
});

export default () => compose([
    routes,
    allowedMethods,
]);
