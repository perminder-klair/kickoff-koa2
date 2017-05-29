import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';

import schema from '../graphql';
// import { isAuthenticated } from '../utils/passport';

const router = new Router();

// https://dev-blog.apollodata.com/full-stack-react-graphql-tutorial-582ac8d24e3b
router.post('/graphql', graphqlKoa(ctx => ({
    schema,
    context: { userId: ctx.cookies.get('userId') }
})));

router.get('/graphiql', graphiqlKoa({
    endpointURL: '/graphql'
}));

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
