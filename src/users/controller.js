import User from './database';

/**
 * Update current user
 * @param  {[type]}  ctx [description]
 * @return {Promise}     [description]
 */
export const updateMe = async ctx => {
  const { body } = ctx.request;
  const objUpdate = {};
  const objFind = { _id: ctx.state.user._id };

  // update profile
  if (body.profile) {
    if (body.profile.firstName) {
      objUpdate['profile.firstName'] = body.profile.firstName;
    }
    if (body.profile.lastName) {
      objUpdate['profile.lastName'] = body.profile.lastName;
    }
  }

  // console.log('objUpdate', objUpdate);
  // console.log('objFind', objFind);
  await User.update(objFind, objUpdate);

  const user = await User.findOne({ _id: ctx.state.user._id });
  ctx.body = user;
};

// TODO
export const passwordReset = ctx => {
  ctx.body = '[GET]: /password/reset - TODO';
};
