const typeDefs = `#graphql
  type User {
    memberNo: String!
    name: String!
    email: String!
    amount: Int!
    token: String!
    tokenExpiryTime: Int!
  }
  type Query {
    users: [User]
  }
`;

export default typeDefs;