import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';
import validator, { object, string } from 'koa-context-validator';

import * as Ctrl from '../controller/auth';

const router = new Router({
	prefix: '/auth',
});

router.post(
	'/register',
	validator(
		{
			body: object().keys({
				username: string().required(),
				password: string().required(),
				profile: object(),
			}),
		},
		{ stripUnknown: true },
	),
	Ctrl.register,
);

router.post(
	'/login',
	validator(
		{
			body: object().keys({
				username: string().required(),
				password: string().required(),
			}),
		},
		{ stripUnknown: true },
	),
	Ctrl.login,
);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
	throw: true,
	notImplemented: () => new Errors.notImplemented(),
	methodNotAllowed: () => new Errors.methodNotAllowed(),
});

export default () => compose([routes, allowedMethods]);
