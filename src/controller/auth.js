import passport from 'koa-passport';
import jwt from 'jsonwebtoken';

import conf from '../conf';

export const login = (ctx, next) => {
    return passport.authenticate('local', { session: true }, (user, userInfo) => {
        // console.log('user', user, userInfo);
        if (userInfo === false) {
            ctx.status = 401;
            ctx.body = { success: false };
        } else {
            const jwtToken = jwt.sign({ id: user }, conf.get('jwtSecret'));
            const token = `JWT ${jwtToken}`;

            ctx.body = { success: true, jwt: token, user: userInfo };
            return ctx.login(userInfo);
        }
    })(ctx, next);
};

export const me = (ctx) => {
    if (ctx.isUnauthenticated()) {
        ctx.status = 401;
        ctx.body = { success: false };
    } else {
        ctx.body = ctx.state.user;
    }
};
