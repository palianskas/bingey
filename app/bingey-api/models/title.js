const { model, Schema } = require('mongoose');

const titleSchema = new Schema(
  {
    imdb_id: String,
    isCustom: Boolean,
    name: {
      type: String,
      required: true,
    },
    alternativeName: String,
    imageUrl: {
      type: String,
      required: true,
    },
    isMovie: Boolean,
    releaseDate: Date,
    directors: [String],
    genres: [String],
    seasonCount: Number,
    seasonEpisodes: [Number],
    latestEpisode: {
      season: Number,
      number: Number,
      releaseDate: Date,
    },
    upcomingEpisode: {
      season: Number,
      number: Number,
      releaseDate: Date,
    },
    plot: String,
    similars: [String],
  },
  {
    timestamps: true,
  }
);

const Title = model('Title', titleSchema);

module.exports = Title;
