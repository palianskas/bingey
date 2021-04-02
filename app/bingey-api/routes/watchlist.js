const express = require('express');

const watchlistController = require('$/controllers/watchlist.js');

const router = express.Router();

router.post('/', watchlistController.validate('createWatchlist'), watchlistController.createWatchlist);

module.exports = router;
