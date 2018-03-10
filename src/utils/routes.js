import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';
import validator, { object, string } from 'koa-context-validator';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

import schema from '../graphql';
import { isAuthenticated } from '../utils/auth';
import * as Ctrl from '../main/controller';

const router = new Router();

router.get('/', Ctrl.landing);

// https://dev-blog.apollodata.com/full-stack-react-graphql-tutorial-582ac8d24e3b
router.post(
  '/graphql',
  isAuthenticated,
  graphqlKoa(ctx => ({
    schema,
    context: ctx, // { userId: ctx.cookies.get('userId') },
  })),
);

router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql',
  }),
);

router.post(
  '/contact',
  validator(
    {
      body: object().keys({
        name: string().required(),
        email: string().required(),
        message: string().required(),
      }),
    },
    { stripUnknown: true },
  ),
  Ctrl.contact,
);

router.post('/signS3', Ctrl.signS3);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  throw: true,
  notImplemented: () => new Errors.notImplemented(),
  methodNotAllowed: () => new Errors.methodNotAllowed(),
});

export default () => compose([routes, allowedMethods]);
