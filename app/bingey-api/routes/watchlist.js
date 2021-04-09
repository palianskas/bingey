const express = require('express');

const watchlistController = require('$/controllers/watchlist.js');

const router = express.Router();

router.get('/', watchlistController.getWatchlists);
router.get('/:id', watchlistController.getWatchlistById);
router.get('/watchlists/:id', watchlistController.getWatchlistById);
router.post('/', watchlistController.validate('createWatchlist'), watchlistController.createWatchlist);

module.exports = router;
