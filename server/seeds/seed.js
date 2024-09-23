const db = require("../config/connection");
const { User } = require("../models");
const { League } = require("../models");
const { Team } = require("../models");
const { Player } = require("../models");
const cleanDB = require("./cleanDB");

const userData = require("./userData.json");
const leagueData = require("./leagueData.json");
const teamData = require("./teamData.json");
const playerData = require("./playerData.json");

db.once("open", async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('League', 'leagues');
    await cleanDB('Team', 'teams');
    await cleanDB('Player', 'players');

    await User.insertMany(userData);
    await League.insertMany(leagueData);
    await Team.insertMany(teamData);
    await Player.insertMany(playerData);

    console.log("Data has been seeded.");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
