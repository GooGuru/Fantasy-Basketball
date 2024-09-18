const { Schema, model } = require ('mongoose');
const teamSchema = require ('./Team');


const playerSchema = new Schema(
{
    playerId: {
        type: Schema.Types.ObjectId,
    },
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
    team: [teamSchema],
},
{
    toJSON:{
        virtuals: true,
    },
}
    );

const Player = model('player', playerSchema);

module.exports = Player