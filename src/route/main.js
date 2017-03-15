import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';
import validator, {
    object,
    string,
} from 'koa-context-validator';

import * as Ctrl from '../controller/main';
import { isAuthenticated } from '../utils/passport';

const router = new Router();

router.get('/', Ctrl.landing);

router.post('/contact', validator({
    body: object().keys({
        name: string().required(),
        email: string().required(),
        message: string().required(),
    }),
}), Ctrl.contact);

router.post('/upload', isAuthenticated(), Ctrl.upload);

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
