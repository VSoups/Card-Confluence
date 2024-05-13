const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
        // add a default value?
    },
    description: String,
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }],
    format: String,
    likedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {
    timestamps: true,
});


module.exports = mongoose.model('Deck', deckSchema);