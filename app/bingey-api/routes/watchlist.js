const express = require('express');

const watchlistController = require('$/controllers/watchlist.js');

const router = express.Router();

router.get('/', watchlistController.getWatchlists);
router.get('/:id', watchlistController.getWatchlistById);
router.put('/watchlists/:id', watchlistController.addTitleToWatchlist);
router.post('/', watchlistController.validate('createWatchlist'), watchlistController.createWatchlist);

module.exports = router;
