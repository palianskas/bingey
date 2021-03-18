const { Schema, model } = require('mongoose');

const UsersSchema = new Schema({
    username: String,
    password: String,
    watchlistLink: String,
});

const Users = model('Users', UsersSchema);

module.exports = Users;