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
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addLeague: async (parent, { userId, leagueId }) => {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { leagues: leagueId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
    },
    addTeamToUser: async (parent, { userId, teamId }) => {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { teams: teamId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
    },
    addPlayer: async (parent, { teamId, playerId }) => {
        return Team.findOneAndUpdate(
          { _id: teamId },
          {
            $addToSet: { players: playerId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
    },
    addTeamToLeague: async (parent, { leagueId, teamId }) => {
        return League.findOneAndUpdate(
          { _id: leagueId },
          {
            $addToSet: { teams: teamId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
    },
    // addLeague: async (parent, { userId, leagueId }, context) => {
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: userId },
    //       {
    //         $addToSet: { leagues: leagueId },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw AuthenticationError;
    // },
    // addTeamToUser: async (parent, { userId, teamId }, context) => {
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: userId },
    //       {
    //         $addToSet: { teams: teamId },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw AuthenticationError;
    // },
    // addPlayer: async (parent, { teamId, playerId }, context) => {
    //   if (context.user) {
    //     return Team.findOneAndUpdate(
    //       { _id: teamId },
    //       {
    //         $addToSet: { players: playerId },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw AuthenticationError;
    // },
    // addTeamToLeague: async (parent, { leagueId, teamId }, context) => {
    //   if (context.user) {
    //     return League.findOneAndUpdate(
    //       { _id: leagueId },
    //       {
    //         $addToSet: { teams: teamId },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw AuthenticationError;
    // },
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