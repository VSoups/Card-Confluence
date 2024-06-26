const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    // Scryfall API id
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    released_at: String,
    mana_cost: String,
    oracle_text: String,
    cmc: Number,
    type_line: String,
    keywords: Array,
    legalities: Array,
    image_uris: Object,
}, {
    timestamps: true,
    toJSON: {virtuals: true},
});

cardSchema.virtual('getSmallImg').get(function() {
    return this.image_uris.art_crop;
});

module.exports = mongoose.model('Card', cardSchema);