import Router from 'koa-router';
import compose from 'koa-compose';
import Errors from 'boom';

// Render react + next.js pages
const router = new Router();

router.get('/', async (ctx) => {
    await ctx.next.render(ctx.req, ctx.res, '/landing', ctx.query);
    ctx.respond = false;
});

router.get('/customers', async (ctx) => {
    await ctx.next.render(ctx.req, ctx.res, '/customers', ctx.query);
    ctx.respond = false;
});

router.get('/about', async (ctx) => {
    await ctx.next.render(ctx.req, ctx.res, '/about', ctx.query);
    ctx.respond = false;
});

router.get('/contact', async (ctx) => {
    await ctx.next.render(ctx.req, ctx.res, '/contact', ctx.query);
    ctx.respond = false;
});

router.get('/_next*', async (ctx) => {
    await ctx.nextHandle(ctx.req, ctx.res);
    ctx.respond = false;
});

router.get('/_webpack*', async (ctx) => {
    await ctx.nextHandle(ctx.req, ctx.res);
    ctx.respond = false;
});

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
