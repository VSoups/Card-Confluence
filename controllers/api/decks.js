const Deck = require('../../models/deck');
const Card = require('../../models/card');

module.exports = {
    index,
    create,
    addCard,
};

async function addCard(req, res) {
    const deck = await Deck.findById(req.body.deckID);
    
    const deckCard = deck.cards.find(card => card.card._id.equals(req.params.cardID));
    if (deckCard) {
        deckCard.qty += 1;
        console.log('---decksCtrl: add one---', deckCard);
    } else {
        const pushCard = {
            qty: 1,
            card: req.params.cardID,
        }
        deck.cards.push(pushCard);
        console.log('---decksCtrl: deck cards---', deck.cards);
    }
    return deck.save();
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