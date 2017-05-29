import mongoose from 'mongoose-fill';

mongoose.Promise = global.Promise;

const CustomerSchema = new mongoose.Schema({
    companyName: {
        type: String,
        index: true,
        trim: true
    },
    fullName: {
        type: String,
        index: true,
        trim: true
    },
    website: {
        type: String,
        trim: true,
    },
    address1: {
        type: String,
        trim: true,
    },
    address2: {
        type: String,
        trim: true,
    },
    town: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    postcode: {
        type: String,
        trim: true,
    },
    latitude: String,
    longitude: String,
    telephone: String,
    status: { type: String, default: 'active' }, // active, banned, not-active
    owner: String,
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
});


export default mongoose.model('customer', CustomerSchema);
