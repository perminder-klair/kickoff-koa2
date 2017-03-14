import User from '../service/user';

export const get = async (ctx) => {
    const users = await User.find();
    ctx.body = { users, time: Date.now() };
};

export const post = (ctx) => {
    ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
    ctx.body = '[PUT]: /user';
};
