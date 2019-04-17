import mongoose from 'mongoose-fill';

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

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
      index: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    profile: ProfileSchema,
    status: { type: String, default: 'pending-email' }, // pending-email, active, banned, not-active
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

export default mongoose.model('User', UserSchema);
