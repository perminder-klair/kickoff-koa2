import compose from 'koa-compose';

// Import all routes
import main from './main';
import user from './user';
import auth from './auth';

export default () => compose([
    main(),
    auth(),
    user(),
]);
