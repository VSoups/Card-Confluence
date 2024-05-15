const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// ALL paths start with /api/decks


// GET /api/decks (get all decks for App.jsx useState)
router.get('/', decksCtrl.index);

// GET /api/decks/:deckID (show deck)
// router.get('/view/:id', decksCtrl.getOne);

// POST /api/decks/new (create new deck)
router.post('/new', ensureLoggedIn, decksCtrl.create);

// POST /api/decks/add/:cardID (add card to deck)
// router.post('/add/:cardID', ensureLoggedIn, decksCtrl.addCard);


module.exports = router;