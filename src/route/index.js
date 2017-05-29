import compose from 'koa-compose';

// Import all routes
import main from './main';
import user from './user';
import auth from './auth';
import graphql from './graphql';
import next from './next';

export default () => compose([
    next(), // always keep this on top
    main(),
    auth(),
    user(),
    graphql(),
]);
