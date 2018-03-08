import compose from 'koa-compose';
import passport from 'koa-passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

import conf from '../conf';
import User from '../service/user';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(new LocalStrategy(async (username, password, done) => { // eslint-disable-line
    try {
      // Test whether is a login using email and password
      if (username && password) {
        const user = await User.findOne({
          email: username.toLowerCase(),
        });

        if (!user) {
          return done(null, false);
        }

        // check password
        const passwordCorrect = await user.comparePassword(password);
        if (!passwordCorrect) {
          return done(null, false);
        }

        done(null, user);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error);
    }
  }),
);

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: conf.get('jwtSecret'),
};

passport.use(
  new JWTStrategy(jwtOpts, async (jwtPayload, done) => {
    const user = await User.findById(jwtPayload.id);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  }),
);

export default function auth() {
  return compose([passport.initialize()]);
}

export function isAuthenticated() {
  return passport.authenticate('jwt', { session: false });
}

export function generateToken(id) {
  const jwtToken = jwt.sign({ id }, conf.get('jwtSecret'));
  return `JWT ${jwtToken}`;
}
