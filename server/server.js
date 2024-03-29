console.log ('running server');

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./config/database');

const typeDefs = require('./modules/proj/graphqlSchema');
const resolvers = require('./modules/proj/resolvers');

// Create Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// Create Express app
const app = express();

// Use Express app as middleware in Apollo Server instance
server.applyMiddleware({ app });

// Listen server
app.listen({ process.env.PORT }, () =>
  console.log(`🚀Server ready at http://localhost:3000${server.graphqlPath}`)
);
