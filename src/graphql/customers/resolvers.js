import Customer from '../../service/customer';

export default {
    Query: {
        allCustomers: async () => Customer
            .find()
            .sort('-createdAt'),
    },
    Mutation: {
        addCustomer: async (root, args) => {
            const newData = new Customer({
                fullName: args.input.fullName, postcode: args.input.postcode
            });

            await newData.save();
            return newData;
        },
    },
};
