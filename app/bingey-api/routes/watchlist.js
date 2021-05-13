const express = require('express');

const watchlistController = require('$/controllers/watchlist.js');

const router = express.Router();

router.get('/', watchlistController.getWatchlists);
router.get('/:id', watchlistController.getWatchlistById);
router.put('/:id', watchlistController.validate('addTitleToWatchlist'), watchlistController.addTitleToWatchlist);
router.post('/', watchlistController.validate('createWatchlist'), watchlistController.createWatchlist);
router.delete('/:id', watchlistController.deleteWatchlist);

module.exports = router;
