import Koa from 'koa';
import debug from 'debug';
import passport from 'koa-passport';
import bodyParser from 'koa-bodyparser';
import jsonError from 'koa-json-error';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import compress from 'koa-compress';
import cors from 'koa-cors';
import errorHandler from 'koa-better-error-handler';
import responseTime from 'koa-response-time';
import convert from 'koa-convert';
import zlib from 'zlib';
import { omit } from 'underscore';

import jsonMiddleware from 'koa-json';
import loggerMiddleware from 'koa-bunyan-logger';

import requestMiddleware from './middleware/request';
import errorMiddleware from './middleware/error';

import auth from './utils/passport';
import routeMiddleware from './route';

import conf from './conf';
import connectDatabase from './utils/mongoose';

const app = new Koa();
const d = debug('kickstarter:root');

connectDatabase(conf.get('mongodb'));

// Register middleware
app.use(bodyParser());
app.use(cors({
    expose: [
        'WWW-Authenticate', 'Server-Authorization',
        'X-Pagination-Page-Count', 'X-Pagination-Current-Page', 'X-Pagination-Per-Page', 'X-Pagination-Total-Count',
    ]
}));
app.use(conditional());
app.use(etag());
app.use(compress({
    flush: zlib.Z_SYNC_FLUSH
}));
app.use(jsonMiddleware());
app.use(jsonError({
    // Avoid showing the stacktrace in 'production' env
    // eslint-disable-next-line
    postFormat: (e, obj) => process.env.NODE_ENV === 'production' ? omit(obj, 'stack') : obj
}));
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());
app.use(convert(responseTime()));
app.use(passport.initialize());
app.use(auth());

// override koa's undocumented error handler
app.context.onerror = errorHandler;

// Registers routes via middleware
app.use(async (ctx, nextt) => {
    ctx.res.statusCode = 200;
    await nextt();
});
app.use(routeMiddleware());

d('current environment: %s', conf.get('env'));
d('server started at port: %d', conf.get('port'));
app.listen(conf.get('port'));
