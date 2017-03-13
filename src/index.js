import Koa from 'koa';
import debug from 'debug';
import passport from 'koa-passport';
import convert from 'koa-convert';
import session from 'koa-generic-session';
import bodyParser from 'koa-bodyparser';

import jsonMiddleware from 'koa-json';
import loggerMiddleware from 'koa-bunyan-logger';

import requestMiddleware from './middleware/request';
import errorMiddleware from './middleware/error';

import './service/passport';
import routeMiddleware from './route';

import conf from './conf';

const app = new Koa();
const d = debug('kickstarter:root');

app.keys = ['your-session-secret'];
app.use(convert(session()));

// Register middleware
app.use(bodyParser());
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());
app.use(passport.initialize());
app.use(passport.session());

// Registers routes via middleware
app.use(routeMiddleware());

d('current environment: %s', conf.get('env'));
d('server started at port: %d', conf.get('port'));
app.listen(conf.get('port'));
