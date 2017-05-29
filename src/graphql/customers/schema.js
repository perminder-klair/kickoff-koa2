const typeDefs = `
    input CustomerInput {
        fullName: String
        postcode: String
    }

    type Customer {
       id: ID!                # "!" denotes a required field
       fullName: String
       postcode: String
    }

    # This type specifies the entry points into our API. In this case
    # there is only one - "customers" - which returns a list of customers.
    type Query {
       allCustomers: [Customer]    # "[]" means this is a list of customers
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
        # A mutation to add a new GlobalData
        addCustomer(input: CustomerInput): Customer
    }
`;

export default typeDefs;
