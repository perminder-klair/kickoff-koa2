import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';

import * as Ctrl from '../controller/main';
import { isAuthenticated } from '../utils/passport';

const router = new Router();

router.post('/contact', Ctrl.contact);
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
