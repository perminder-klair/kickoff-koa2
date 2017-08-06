import User from '../service/user';

/**
 * get all users
 * @param  {[type]}  ctx [description]
 * @return {Promise}     [description]
 */
export const get = async (ctx) => {
	const users = await User.find();
	ctx.body = { users, time: Date.now() };
};

/**
 * Get requested user by slug
 * @param  {[type]}  ctx [description]
 * @return {Promise}     [description]
 */
export const single = async (ctx) => {
	const { slug } = ctx.params;

	const user = await User.findOne({ slug });
	if (!user) {
		ctx.status = 404;
		ctx.body = { status: 'error', message: 'Requested user not found.' };
	} else {
		ctx.body = user;
	}
};

/**
 * Get current active user details
 * @param  {[type]}  ctx [description]
 * @return {Promise}     [description]
 */
export const me = async (ctx) => {
	if (ctx.isUnauthenticated()) {
		ctx.status = 401;
		ctx.body = { success: false };
	} else {
		ctx.body = ctx.state.user;
	}
};

/**
 * Update current user
 * @param  {[type]}  ctx [description]
 * @return {Promise}     [description]
 */
export const updateMe = async (ctx) => {
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
export const passwordReset = (ctx) => {
	ctx.body = '[GET]: /password/reset - TODO';
};
