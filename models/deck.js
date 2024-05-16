const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user');

const cardListSchema = new Schema({
    qty: { type: Number, default: 1 },
    card: {
        type: Schema.Types.ObjectId,
        ref: 'Card',
        required: true,
    },
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
    cards: [cardListSchema],
    format: String,
    likedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});


module.exports = mongoose.model('Deck', deckSchema);