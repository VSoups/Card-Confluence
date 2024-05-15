const Deck = require('../../models/deck');

module.exports = {
    index,
    create,
    getOne,
    addCard,
};

async function addCard(req, res) {
    
}

// delete?
async function getOne(req, res) {
    const deck = await Deck.findById(req.params.id);
    console.log(deck);
}

async function index(req, res) {
    const decks = await Deck.find({}); // returns array of all decks
    res.json(decks);
}

async function create(req, res) {
    // console.log(req.body.deck);
    const deck = req.body.deck;
    if (await Deck.findOne({name: deck.name, user: req.user._id})) {
        // crashing server?
        // throw new Error('User duplicate deck name');
        res.json('User duplicate deck name');
    } else {
        const newDeck = await Deck.create(deck);
        res.json(newDeck);
    }
}