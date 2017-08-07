import passport from 'koa-passport';
import randomstring from 'randomstring';

import User from '../service/user';
import { generateToken } from '../utils/passport';

export const register = async (ctx) => {
  const { body } = ctx.request;

  let user = await User.findOne({ email: body.username.toLowerCase() });
  if (!user) {
    const data = {
      email: body.username,
      password: body.password,
    };

    // set profile
    if (body.profile) {
      data.profile = body.profile;
    }

    // set slug
    data.slug = body.profile
      ? `${body.profile.firstName} ${body.profile
          .lastName} ${randomstring.generate(4)}`
      : randomstring.generate(7);

    user = new User(data);
    await user.save();

    const token = generateToken(user._id);

    ctx.body = { success: true, jwt: token, user };
    ctx.login(user);
  } else {
    ctx.status = 400;
    ctx.body = { status: 'error', message: 'E-mail already registered' };
  }
};

export const login = (ctx, next) => { // eslint-disable-line
    return passport.authenticate('local', { session: false }, (user, userInfo) => { // eslint-disable-line
      if (userInfo === false) {
        ctx.status = 401;
        ctx.body = {
          success: false,
          message: 'Invalid email or password',
        };
      } else {
        const token = generateToken(userInfo._id);

        ctx.body = { success: true, jwt: token, user: userInfo };
        return ctx.login(userInfo);
      }
    },
  )(ctx, next);
};
