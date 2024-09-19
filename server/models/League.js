const { Schema, model } = require("mongoose");
const teamSchema = require("./Team");

const leagueSchema = new Schema(
  {
    leagueId: {
      type: Schema.Types.ObjectId,
    },
    leagueName: {
      type: String,
      required: true,
    },
    Teams: [teamSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const League = model("league", leagueSchema);

module.exports = League;
