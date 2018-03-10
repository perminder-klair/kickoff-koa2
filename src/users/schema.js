const typeDefs = `
  type Profile {
    firstName: String
    lastName: String
  }

  type User {
    id: ID!                # "!" denotes a required field
    email: String
    slug: String
    profile: Profile
    status: String
    jwt: String
  }

  type JwtUser {
    jwt: String
    user: User
  }

  input RegisterInput {
    email: String!
    password: String!
    firstName: String
    lastName: String
  }

  input UpdateInput {
    email: String
    password: String
    firstName: String
    lastName: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  # This type specifies the entry points into our API. In this case
  # there is only one - "me" - which returns a current user.
  type Query {
    me: User    # returns a current user
  }

  # The mutation root type, used to define all mutations.
  type Mutation {
    register(input: RegisterInput): JwtUser
    login(input: LoginInput): JwtUser
    updateMe(input: UpdateInput): User
  }
`;

export default typeDefs;
