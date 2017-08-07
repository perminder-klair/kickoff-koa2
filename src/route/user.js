import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';
import validator, { object, string } from 'koa-context-validator';

import * as Ctrl from '../controller/user';
import { isAuthenticated } from '../utils/passport';

const router = new Router({
  prefix: '/users',
});

router.get('/me', isAuthenticated(), Ctrl.me);
router.put(
  '/me',
  isAuthenticated(),
  validator(
    {
      body: object().keys({
        profile: object(),
      }),
    },
    { stripUnknown: true },
  ),
  Ctrl.updateMe,
);

router.get('/password/reset', isAuthenticated(), Ctrl.passwordReset);

router.get(
  '/:slug',
  validator(
    {
      params: object().keys({
        slug: string().required(),
      }),
    },
    { stripUnknown: true },
  ),
  Ctrl.single,
);

router.get('/', Ctrl.get);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  throw: true,
  notImplemented: () => new Errors.notImplemented(),
  methodNotAllowed: () => new Errors.methodNotAllowed(),
});

export default () => compose([routes, allowedMethods]);
