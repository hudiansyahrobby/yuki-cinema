const router = require('express').Router();

const { verifyUser } = require('../middleware/userAuth');

const watchlistController = require('../controller/watchlist');

router.get('/watchlist', verifyUser, watchlistController.getWatchlist);

router.put('/watchlist/:id', verifyUser, watchlistController.addWatchlist);

router.delete('/watchlist/:id', verifyUser, watchlistController.removeWatchlist);

module.exports = router;
