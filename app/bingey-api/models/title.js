const { model, Schema } = require('mongoose');

const titleSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    isCustom: Boolean,
    name: {
      type: String,
      required: true,
    },
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
    _id: false,
    timestamps: true,
  }
);

const Title = model('Title', titleSchema);

module.exports = Title;
