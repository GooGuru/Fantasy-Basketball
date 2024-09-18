const { Schema, model } = require("mongoose");

const playerSchema = require("./Player");

const teamSchema = new Schema(
  {
    teamName: {
      type: String,
      require: true,
      unique: true,
    },
    teamPoints: {
      type: Number,
    },
    players: [playerSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Team = model("Team", teamSchema);

module.exports = Team;
