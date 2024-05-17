const Deck = require('../../models/deck');

module.exports = {
    index,
    create,
    addCard,
    minusCard,
    delete: deleteOne,
};

// delete one deck
async function deleteOne(req, res) {
    // console.log('DECK: ', req.body.deck, 'USER: ', req.body.user);
    if (req.body.deck.user._id !== req.body.user._id) return;
    const deleted = await Deck.findOneAndDelete({user: req.body.deck.user._id, id: req.body.deck._id});
    res.json(deleted);
}

// delete one copy of card
async function minusCard(req, res) {
    const deck = await Deck.findById(req.body.deckID);
    if (req.user._id !== deck.user.toString()) return;
    const deckCard = deck.cards.find(card => card.card._id.equals(req.params.cardID));
    const cardIdx = deck.cards.indexOf(deckCard);
    
    if (deckCard.qty <= 1) {
        deck.cards.splice(cardIdx, 1);
    } else {
        deckCard.qty -= 1;
    }
    console.log(deckCard);
    return deck.save();
}

// add card to deck
async function addCard(req, res) {
    const deck = await Deck.findById(req.body.deckID);
    if (req.user._id !== deck.user.toString()) return;
    
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
    deck.save();
    return res.json(deck);
}

// fetch all decks
async function index(req, res) {
    const decks = await Deck.find({}).populate('cards.card').populate('user'); // returns array of all decks
    res.json(decks);
}

// create a deck
async function create(req, res) {
    const deck = req.body.deck;
    if (await Deck.findOne({name: deck.name, user: req.user._id})) {
        res.json('User duplicate deck name');
    } else {
        const newDeck = await Deck.create(deck);
        res.json(newDeck);
    }
}