// MODEL 
//const { gql } = require('apollo-server-express');

// // Construct a schema using GraphQL schema language
// const typeDefs = gql`
//   type Post {
//     _id: String,
//     title: String,
//     content: String,
//   },
//   type Query {
//     posts: [Post]
//   },
//   type Mutation {
//     addPost(title: String!, content: String!): Post,
//   }
// `;

// module.exports = typeDefs;



const { gql } = require('apollo-server-express');

// Construct a schema using GraphQL schema language
const typeDefs = gql`
  type Proj {
    _id: String,
    title: String,
    type: String,
    desc: String,
    tech: String,
    monPic: String,
    mobPic: String,
    liveURL: String,
    codeURL: String,
    viewURL: String
  },
  type Query {
    projs: [Proj]
  },
  type Mutation {
    addProj(  
      title: String!,
      type: String!,
      desc: String,
      tech: String,
      monPic: String,
      mobPic: String,
      liveURL: String,
      codeURL: String,
      viewURL: String
    ): Proj,
  }
`;

module.exports = typeDefs;