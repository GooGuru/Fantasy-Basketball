const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const { typeDefs, resolvers } = require("./schemas");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const db = require("./config/connection");

const { League } = require("./models/League");
const { Player } = require("./models/Player");
const { Team } = require("./models/Team");
const { User } = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3001;

const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Connected to http://localhost:${PORT}`);
    });
  });
};

startApolloServer();
