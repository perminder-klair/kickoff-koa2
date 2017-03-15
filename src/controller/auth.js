import passport from 'koa-passport';

import User from '../service/user';
import { generateToken } from '../utils/passport';

export const register = async (ctx) => {
    const { name, username, password } = ctx.request.body;

    // TODO - improve validation
    if (name && username && password) {
        let user = await User.findOne({ email: username.toLowerCase() });
        if (!user) {
            user = new User({
                name,
                email: username,
                password
            });

            await user.save();

            const token = generateToken(user._id);

            ctx.body = { success: true, jwt: token, user };
            ctx.login(user);
        } else {
            ctx.status = 400;
            ctx.body = { status: 'error', message: 'E-mail already registered' };
        }
    } else {
        ctx.status = 400;
        ctx.body = { status: 'error', message: 'Invalid email or password' };
    }
};

export const login = (ctx, next) => {
    return passport.authenticate('local', { session: false }, (user, userInfo) => {
        if (userInfo === false) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Invalid email or password' };
        } else {
            const token = generateToken(userInfo._id);

            ctx.body = { success: true, jwt: token, user: userInfo };
            return ctx.login(userInfo);
        }
    })(ctx, next);
};
