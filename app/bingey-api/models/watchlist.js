const { Schema, model } = require('mongoose');

const watchlistSchema = new Schema(
  {
    titles: [{ titleId: { type: Schema.Types.ObjectId, ref: 'Title' } }],
  },
  { timestamps: true }
);

const Watchlist = model('Watchlist', watchlistSchema);

module.exports = Watchlist;
