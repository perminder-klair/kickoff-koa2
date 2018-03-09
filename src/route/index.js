import compose from 'koa-compose';

// Import all routes
import main from './main';
import graphql from './graphql';

export default () => compose([main(), graphql()]);
