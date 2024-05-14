const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const cardsCtrl = require('../../controllers/api/cards');

// all paths start with /api/cards

// GET /api/cards/search
router.get('/search/:cardName', ensureLoggedIn, cardsCtrl.getCardByName);

module.exports = router;