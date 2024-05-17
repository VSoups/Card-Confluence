const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// ALL paths start with /api/decks


// GET /api/decks (get all decks for App.jsx useState)
router.get('/', decksCtrl.index);
// POST /api/decks/new (create new deck)
router.post('/new', ensureLoggedIn, decksCtrl.create);
// POST /api/decks/add/:cardID (add card to deck)
router.post('/add/:cardID', ensureLoggedIn, decksCtrl.addCard);
// POST /api/decks/minus/:cardID (remove one card)
router.post('/minus/:cardID', ensureLoggedIn, decksCtrl.minusCard);
// DELETE /api/decks/delete (delete deck)
router.delete('/delete', ensureLoggedIn, decksCtrl.delete);


module.exports = router;