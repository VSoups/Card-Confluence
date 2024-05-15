const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardSchema = require('./card');

const cardListSchema = new Schema({
    qty: { type: Number, default: 1 },
    // card: cardSchema,
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});

const deckSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
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