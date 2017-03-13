import passport from 'koa-passport';

export const login = (ctx, next) => {
    return passport.authenticate('local', { session: false }, (user, userInfo) => {
        // console.log('user', user, userInfo);
        if (userInfo === false) {
            ctx.status = 401;
            ctx.body = { success: false };
        } else {
            ctx.body = { success: true };
            return ctx.login(userInfo);
        }
    })(ctx, next);
};

export const userInfo = (ctx) => {
    if (ctx.isUnauthenticated()) {
        ctx.status = 401;
        ctx.body = { success: false };
    } else {
        ctx.body = ctx.state.user;
    }
};
