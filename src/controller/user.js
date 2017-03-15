import User from '../service/user';

export const get = async (ctx) => {
    const users = await User.find();
    ctx.body = { users, time: Date.now() };
};

export const me = async (ctx) => {
    if (ctx.isUnauthenticated()) {
        ctx.status = 401;
        ctx.body = { success: false };
    } else {
        ctx.body = ctx.state.user;
    }
};

// https://github.com/sahat/hackathon-starter/blob/master/controllers/user.js

export const updateMe = (ctx) => {
    ctx.body = '[PUT]: /users/me - TODO';
};

export const passwordReset = (ctx) => {
    ctx.body = '[GET]: /password/reset - TODO';
};
