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

    // // Add a third argument to the resolver to access data in our `context`
    // addSkill: async (parent, { profileId, skill }, context) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: profileId },
    //       {
    //         $addToSet: { skills: skill },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw AuthenticationError;
    // },


  Mutation: {
    addLeague: async (parent, { userId, leagueId }, context) => {
      if (context.user) {
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
      }
      throw AuthenticationError;
    },
    // addLeague: async (parent, { leagueName }) => {
    //     const  league = await League.create({ leagueName });
    //     return league ;
    // },
    addPlayer: async (parent, { playerFirstName, playerLastName, playerPoints, playerPosition, playerTeam }) => {
        const player = await Player.create({playerFirstName, playerLastName, playerPoints, playerPosition, playerTeam});
        return player ; 
    },
    addTeamToLeague: async (parent, { teamName, teamPoints }) => {
      const team = await Team.create({teamName, teamPoints});
        return team ;
    },
    addTeamToUser: async (parent, { teamName, teamPoints }) => {
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