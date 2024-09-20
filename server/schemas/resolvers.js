const { League } = require("../models/League");
const { Player } = require("../models/Player");
const { Team } = require("../models/Team");
const { User } = require("../models/User");

const resolvers = {
  Query: {
    leagues: async () => {
      return League.find({});
    },
    Players: async () => {
      return Player.find({});
    },
    Teams: async () => {
      return Team.find({});
    },
    Users: async () => {
        return User.find({});
    }
  },
  Mutation: {
    addLeague: async (parent, { leagueName, Teams }) => {
        return League.create({leagueName, Teams});
    },
    addPlayer: async (parent, { playerFirstName, playerLastName, playerPoints, playerPosition, playerTeam }) => {
        return Player.create({playerFirstName, playerLastName, playerPoints, playerPosition, playerTeam});
    },
    addTeam: async (parent, { teamName, teamPoints, players }) => {
        return Team.create({teamName, teamPoints, players});
    },
    addUser: async (parent, { username, email, password, first, last, leagues, teams }) => {
        return User.create({username, email, password, first, last, leagues, teams});
    }
  }
};


module.exports = resolvers;