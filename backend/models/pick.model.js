const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const pickSchema = new Schema({
    game: String,
    gameId: String,
    date: Date,
    amountBet: mongoose.Decimal128,
    pick: String,
    win: Boolean,
    typeOfBet: String,
    likes: [{
        amount: Number,
        created: { 
            type: Date, 
            default: Date.now 
        },
        likedBy: { 
            type: mongoose.Schema.ObjectId, 
            ref: 'User'
        }
    }]
});

const Pick = mongoose.model('Pick', pickSchema);
module.exports = Pick;
