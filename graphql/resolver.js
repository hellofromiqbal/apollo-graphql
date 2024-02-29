import User from "../models/User.js";

const resolvers = {
  Query: {
    users: async () => await User.find()
  },
};

export default resolvers;