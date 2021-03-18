const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    _id:{
        type: String,
        required: true,
    },
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
            watchlistId: {
                type: Schema.Types.ObjectId,
                ref: 'Watchlist',
            },
        }
    ],
    
	recommended: [
		{
            titleId: {
                type: Schema.Types.ObjectId,
                ref: 'Titles',
            },
            name: {
                type: String,
            },
			imgUrl: {
                type: String,
            },
		}
	]
},
  {
    _id: false,
    timestamps: true,
  }
);

const User = model('User', userSchema);

module.exports = User;