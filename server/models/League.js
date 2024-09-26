const { Schema, model } = require("mongoose");
const teamSchema = require("./Team");

const leagueSchema = new Schema(
  {
    leagueName: {
      type: String,
      required: true,
    },
    Teams: [
      {
        type: Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const League = model("League", leagueSchema);

module.exports = League;
