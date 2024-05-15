const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// ALL paths start with /api/decks

// GET /api/decks (get all decks for App.jsx useState)
router.get('/', decksCtrl.index);
// GET /api/decks/:id (show deck)

// POST /api/decks/new (create new deck)
router.post('/new', ensureLoggedIn, decksCtrl.create);


module.exports = router;