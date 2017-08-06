import compose from 'koa-compose';

// Import all routes
import main from './main';
import user from './user';
import auth from './auth';
import graphql from './graphql';

export default () => compose([main(), auth(), user(), graphql()]);
