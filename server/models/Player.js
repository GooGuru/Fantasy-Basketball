const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
  {
    playerFirstName: {
      type: String,
      required: true,
    },
    playerLastName: {
      type: String,
      required: true,
    },
    playerPoints: {
      type: Number,
    },
    playerPosition: {
      type: String,
    },
    playerTeam: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Player = model("Player", playerSchema);

module.exports = Player;
