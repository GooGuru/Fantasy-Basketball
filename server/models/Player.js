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
      required: true,
    },
    playerPosition: {
      type: String,
      required: true,
    },
    playerteam: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Player = model("player", playerSchema);

module.exports = Player;
