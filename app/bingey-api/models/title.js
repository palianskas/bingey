const { mongoose, Schema } = require('mongoose');

const titleSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
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
    upcomingEpisode: {
      season: Number,
      number: Number,
      releaseDate: Date,
    },
    plot: String,
    similars: [
      {
        similarId: {
          type: Schema.Types.ObjectId,
          ref: 'Title',
        },
      },
    ],
  },
  { timestamps: true }
);

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;
