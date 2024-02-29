import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolver.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);