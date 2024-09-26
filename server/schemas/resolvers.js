const { League } = require("../models");
const { Player } = require("../models");
const { Team } = require("../models");
const { User } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    leagues: async () => {
      return await League.find({});
    },
    players: async () => {
      return await Player.find({});
    },
    teams: async () => {
      return await Team.find({});
    },
    users: async () => {
      return await User.find({});
    }
  },
  Mutation: {
    addLeague: async (parent, { leagueName }) => {
        const  league = await League.create({ leagueName });
        return league ;
    },
    addPlayer: async (parent, { playerFirstName, playerLastName, playerPoints, playerPosition, playerTeam }) => {
        const player = await Player.create({playerFirstName, playerLastName, playerPoints, playerPosition, playerTeam});
        return player ; 
    },
    addTeam: async (parent, { teamName, teamPoints }) => {
      const team = await Team.create({teamName, teamPoints});
        return team ;
    },
    addUser: async (parent, { username, email, password, first, last }) => {
      const user = await User.create({username, email, password, first, last});
      const token = signToken(user);
        return { token, user };    
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  }
};


module.exports = resolvers;