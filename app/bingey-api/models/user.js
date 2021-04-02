const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    registrationDate: {
      type: Date,
      required: true,
    },
    watchlists: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: 'Watchlist',
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],

    recommended: [
      {
        titleId: {
          type: Schema.Types.ObjectId,
          ref: 'Title',
        },
        name: String,
        imgUrl: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;
