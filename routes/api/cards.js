const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const cardsCtrl = require('../../controllers/api/cards');

// all paths start with /api/cards

// GET /cards/named?fuzzy=(name)
router.get('/named', ensureLoggedIn, cardsCtrl.getCardByName);