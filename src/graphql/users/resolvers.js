import randomstring from 'randomstring';

import { generateToken } from '../../utils/auth';
import User from '../../service/user';

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

      const slug = firstName
        ? `${firstName} ${lastName} ${randomstring.generate(4)}`
        : randomstring.generate(7);

      const data = {
        email,
        password,
        profile: { firstName, lastName },
        slug,
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
  },
};
