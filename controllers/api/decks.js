const Deck = require('../../models/deck');

module.exports = {
    create,
};

async function create(req, res) {
    // console.log(req.body.deck);
    const deck = req.body.deck;
    if (await Deck.findOne({name: deck.name, user: req.user._id})) {
        // crashing server?
        // throw new Error('User duplicate deck name');
        res.json('User duplicate deck name');
    } else {
        const newDeck = await Deck.create(deck);
        console.log(newDeck);
        res.json(newDeck);
    }
}