import compose from 'koa-compose';

// Import all routes
import user from './user';
import auth from './auth';

export default () => compose([
    auth(),
    user(),
]);
