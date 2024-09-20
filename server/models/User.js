const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const leagueSchema = require("./League");
const teamSchema = require("./Team");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must be a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    leagues: [
      {
        type: Schema.Types.ObjectId,
        ref: "league",
      },
    ],
    teams: [
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

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("teamCount").get(function () {
  return this.teams.length;
});

userSchema.virtual("leagueCount").get(function () {
  return this.league.length;
});

const User = model("User", userSchema);

module.exports = User;
