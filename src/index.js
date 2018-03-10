import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import jsonError from 'koa-json-error';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import cors from 'koa-cors';
import errorHandler from 'koa-better-error-handler';
import responseTime from 'koa-response-time';
import convert from 'koa-convert';
import { omit } from 'underscore';
import jsonMiddleware from 'koa-json';
import loggerMiddleware from 'koa-bunyan-logger';

import requestMiddleware from './utils/middleware/request';

import routeMiddleware from './utils/routes';

import config from './utils/config';
import connectDatabase from './utils/mongoose';

const app = new Koa();

connectDatabase(config.get('mongodb'));

// Register middleware
app.use(bodyParser());
app.use(
  cors({
    expose: [
      'WWW-Authenticate',
      'Server-Authorization',
      'X-Pagination-Page-Count',
      'X-Pagination-Current-Page',
      'X-Pagination-Per-Page',
      'X-Pagination-Total-Count',
    ],
  }),
);
app.use(conditional());
app.use(etag());
app.use(jsonMiddleware());
app.use(
  jsonError({
    // Avoid showing the stacktrace in 'production' env
    // eslint-disable-next-line
    postFormat: (e, obj) => process.env.NODE_ENV === 'production' ? omit(obj, 'stack') : obj
  }),
);
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(convert(responseTime()));
app.use(routeMiddleware());

// override koa's undocumented error handler
app.context.onerror = errorHandler;

console.log('current environment: %s', config.get('env'));
app.listen(config.get('port'));
console.log('server started at http://localhost:%d', config.get('port'));
