import compose from 'koa-compose';
import passport from 'koa-passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

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

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        // Test whether is a login using email and password
        if (username && password) {
            const user = await User.findOne({ email: username.toLowerCase() });

            if (!user) {
                done(null, false);
            }

            done(null, user);
            // TODO - check password
        } else {
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}));

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: conf.get('jwtSecret'),
};

passport.use(new JWTStrategy(jwtOpts, async (jwt_payload, done) => {
    const user = await User.findById(jwt_payload.id);

    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
}));

export default function auth() {
    return compose([
        passport.initialize(),
    ]);
}

export function isAuthenticated() {
    return passport.authenticate('jwt');
}
