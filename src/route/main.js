import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';
import validator, { object, string } from 'koa-context-validator';

import * as Ctrl from '../controller/main';

const router = new Router();

router.get('/', Ctrl.landing);

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
