import { generateToken } from '../utils/auth';
import User from './database';

export default {
  Query: {
    me: async (root, args, ctx) => {
      if (!ctx.user) {
        throw new Error('Not logged in');
      }
      return User.findOne({ _id: ctx.user.id });
    },
  },
  Mutation: {
    register: async (root, args) => {
      const { email, password, firstName, lastName } = args.input;
      let user = await User.findOne({ email: email.toLowerCase() });

      if (user) {
        throw new Error('E-mail already registered.');
      }

      const data = {
        email,
        password,
        profile: { firstName, lastName },
      };

      user = new User(data);
      await user.save();
      const token = generateToken(user);
      return { user, jwt: token };
    },
    login: async (root, args) => {
      const user = await User.findOne({ email: args.input.email });

      if (!user) {
        throw new Error('Invalid username or password.');
      }
      const isPasswordValid = await user.comparePassword(args.input.password);
      if (!isPasswordValid) {
        throw new Error('Invalid username or password.');
      }

      const token = generateToken(user);
      return { user, jwt: token };
    },
    updateMe: async (root, args, ctx) => {
      if (!ctx.user) {
        throw new Error('Not logged in');
      }

      const objUpdate = {};
      const objFind = { _id: ctx.user.id };

      // update profile
      if (args.input.email) {
        objUpdate.email = args.input.email;
      }
      if (args.input.firstName) {
        objUpdate['profile.firstName'] = args.input.profile.firstName;
      }
      if (args.input.lastName) {
        objUpdate['profile.lastName'] = args.input.profile.lastName;
      }

      // console.log('objUpdate', objUpdate);
      // console.log('objFind', objFind);
      await User.update(objFind, objUpdate);

      return User.findOne({ _id: ctx.user.id });
    },
  },
};
