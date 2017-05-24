import mongoose from 'mongoose-fill';
import bcrypt from 'bcrypt-nodejs';

mongoose.Promise = global.Promise;

const ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
        // select: false,
    },
    slug: {
        type: String,
        required: true,
        index: true,
        trim: true,
        unique: true
    },
    profile: ProfileSchema,
    status: { type: String, default: 'pending-email' }, // pending-email, active, banned, not-active
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            delete ret.password;
        }
    }
});

UserSchema.pre('save', async function (done) { // eslint-disable-line
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
        return done();
    }

    try {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        done();
    } catch (err) {
        done(err);
    }
});

UserSchema.methods.comparePassword = async function (candidatePassword) { // eslint-disable-line
    const result = await bcrypt.compare(candidatePassword, this.password);
    return result;
};

UserSchema.virtual('profile.fullName').get(function () { // eslint-disable-line
    return this.profile.firstName + ' ' + this.profile.lastName; // eslint-disable-line
});

export default mongoose.model('User', UserSchema);
