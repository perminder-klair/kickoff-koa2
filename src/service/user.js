import mongoose from 'mongoose-fill';
import bcrypt from 'bcrypt';

mongoose.Promise = global.Promise;

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
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
        }
    }
});

UserSchema.pre('save', async function (done) {
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

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const result = await bcrypt.compare(candidatePassword, this.password);
    return result;
};

export default mongoose.model('User', UserSchema);
