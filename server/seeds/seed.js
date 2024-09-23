const db = require('../config/connection');
const  { User } = require('../models');
const { League } = require('../models');
const { Team } = require('../models');
const { Player } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const leagueData = require('./leagueData.json');
const teamData = require('./teamData.json');
const playerData = require('./playerData.json');

db.once('open', async () => {
    await cleanDB();

    await 
})