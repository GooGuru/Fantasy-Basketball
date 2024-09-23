const fetch = require("node-fetch");
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
    },
    getExternalLeagues: async () => {
      const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2d1f069669msha77c4b904e39c64p12c84ejsnbecdc8749378', 
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data.response.map(league => ({
          leagueName: league.league.name,
          country: league.country.name,
          season: league.seasons[0]?.year 
        }))
          .filter(league => league.season === 2022);
      } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch leagues');
      }
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