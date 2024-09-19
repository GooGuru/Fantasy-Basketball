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
    addLeague: async (parent, { leagueID, leagueName, Teams }) => {
        return League.create({leagueID, leagueName, Teams});
    },
    addPlayer: async (parent, { playerID, playerFirstName, playerLastName, playerPoints, playerPosition, playerTeam }) => {
        return League.create({playerID, playerFirstName, playerLastName, playerPoints, playerPosition, playerTeam});
    },
    addTeam: async (parent, { teamName, teamPoints, players }) => {
        return League.create({teamName, teamPoints, players});
    },
    addUser: async (parent, { username, email, password, first, last, leagues, teams }) => {
        return League.create({username, email, password, first, last, leagues, teams});
    }
  }
};


module.exports = resolvers;