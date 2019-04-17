import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';
import validator, { object, string } from 'koa-context-validator';

import * as MainCtrl from '../controllers/main';
import * as CarsCtrl from '../controllers/cars';

const router = new Router();

router.get('/', MainCtrl.landing);

router.get('/cars', CarsCtrl.listCars);

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
  MainCtrl.contact,
);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  throw: true,
  notImplemented: () => new Errors.notImplemented(),
  methodNotAllowed: () => new Errors.methodNotAllowed(),
});

export default () => compose([routes, allowedMethods]);
