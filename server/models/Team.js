const { Schema, model } = require("mongoose");

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
    players: [
      {
        type: Schema.Types.ObjectId, //foreign key
        ref: "player",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Team = model("Team", teamSchema);

module.exports = Team;
