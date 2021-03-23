const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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
                ref: 'Title',
            },
            name: String,
			imgUrl: {
                type: String,
            },
		}
	]
},
  { timestamps: true, }
);

const User = model('User', userSchema);

module.exports = User;