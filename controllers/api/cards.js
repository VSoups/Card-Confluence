const Card = require('../../models/card');

module.exports = {
    getCardByName,
};

async function getCardByName(req, res) {
    const fetchCard = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${req.params.cardName}`)
    .then(res => res.json()).then(card => card);

    // check database for duplicate, otherwise create the card
    if (!(await Card.findOne({id: fetchCard.id}))) {
        const newCard = await Card.create(fetchCard); // fix Card model save function
        console.log('Card created: ', newCard.name);
        res.json(newCard);
    } else {
        const newCard = await Card.findOne({id: fetchCard.id});
        console.log('Card found: ', newCard.name)
        res.json(newCard);
    }
}