import Koa from 'koa';
import debug from 'debug';
import passport from 'koa-passport';
import bodyParser from 'koa-bodyparser';
import jsonError from 'koa-json-error';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import compress from 'koa-compress';
import zlib from 'zlib';
import { omit } from 'underscore';
import next from 'next';

import jsonMiddleware from 'koa-json';
import loggerMiddleware from 'koa-bunyan-logger';

import requestMiddleware from './middleware/request';
import errorMiddleware from './middleware/error';

import auth from './utils/passport';
import routeMiddleware from './route';

import conf from './conf';
import connectDatabase from './utils/mongoose';

const nextApp = next({ dev: true, dir: './src' });

nextApp.prepare()
.then(() => {
    const app = new Koa();
    const d = debug('kickstarter:root');

    connectDatabase(conf.get('mongodb'));

    app.context.next = nextApp;

    // Register middleware
    app.use(bodyParser());
    app.use(conditional());
    app.use(etag());
    app.use(compress({
        flush: zlib.Z_SYNC_FLUSH
    }));
    app.use(jsonMiddleware());
    app.use(jsonError({
        // Avoid showing the stacktrace in 'production' env
        postFormat: (e, obj) => process.env.NODE_ENV === 'production' ? omit(obj, 'stack') : obj
    }));
    app.use(loggerMiddleware());
    app.use(requestMiddleware());
    app.use(errorMiddleware());
    app.use(passport.initialize());
    app.use(auth());

    // Registers routes via middleware
    app.use(routeMiddleware());

    d('current environment: %s', conf.get('env'));
    d('server started at port: %d', conf.get('port'));
    app.listen(conf.get('port'));
});
