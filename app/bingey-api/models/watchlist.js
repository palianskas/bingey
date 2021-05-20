const { Schema, model } = require('mongoose');

const watchlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    titles: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: 'Title',
        },
        name: {
          type: String,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
        releaseDate: {
          type: Date,
          required: true,
        },
        upcomingEpisode: {
          season: Number,
          number: Number,
          releaseDate: Date,
        },
        genres: [String],
        directors: [String],
      },
    ],
  },
  { timestamps: true }
);

const Watchlist = model('Watchlist', watchlistSchema);

module.exports = Watchlist;
