const { check, validationResult } = require('express-validator');

const Watchlist = require('$/models/watchlist');

const createWatchlist = async (req, res, next) => {
  try {
    const errors = validationResult(req).errors;

    if (errors && errors.length != 0) {
      res.status(400).json({ errors: errors });

      return;
    }

    const watchlist = parseWatchlist(req);

    watchlist.save((err, watchlist) => {
      if (err) {
        res.status(400).json({ errors: err });

        return;
      }

      res.json(watchlist);
    });
  } catch (error) {
    return next(error);
  }
};

const validate = (method) => {
  switch (method) {
    case 'createWatchlist': {
      return [check('name', 'Name is required').trim().notEmpty()];
    }
  }
};

const parseWatchlist = (req) => {
  return new Watchlist({
    name: req.body.name,
  });
};

module.exports = {
  validate: validate,
  createWatchlist: createWatchlist,
};
