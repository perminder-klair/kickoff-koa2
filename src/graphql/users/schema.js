const typeDefs = `
    input UserInput {
        fullName: String
        postcode: String
    }

    type User {
       id: ID!                # "!" denotes a required field
       fullName: String
       postcode: String
    }

    # This type specifies the entry points into our API. In this case
    # there is only one - "Users" - which returns a list of users.
    type Query {
        users: [User]    # "[]" means this is a list of users
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
        # A mutation to add a new GlobalData
        addUser(input: UserInput): User
    }
`;

export default typeDefs;
