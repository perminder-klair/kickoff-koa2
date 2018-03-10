import jwt from 'jsonwebtoken';

import conf from './config';

export const isAuthenticated = async (ctx, next) => {
  // console.log('isAuthenticated', ctx.header.authorization);
  ctx.user = null;
  if (!ctx.header.authorization) {
    return next();
  }

  const token = ctx.header.authorization.substring(4);
  const data = await new Promise(resolve => {
    jwt.verify(token, conf.get('jwtSecret'), (err, decoded) => {
      if (err) {
        return resolve(null);
      }
      return resolve(decoded);
    });
  });
  ctx.user = data;
  return next();
};

export function generateToken(user) {
  const jwtToken = jwt.sign(
    { id: user._id, email: user.email },
    conf.get('jwtSecret'),
  );
  return `JWT ${jwtToken}`;
}
