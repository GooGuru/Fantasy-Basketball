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
        ref: "team",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const League = model("league", leagueSchema);

module.exports = League;
