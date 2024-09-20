const db = require('../config/connection');
const  { User } = require('../models');
const { League } = require('../models');
const { Teams } = require('../models');
const cleanDB = require('./cleanDB');

const leagueData = require('./leagueData.json');
const teamData = require('./teamData.json');
const userData = require('./userData.json');

db.once('open', async () => {
    await cleanDB()
})