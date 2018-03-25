const mongoose = require('mongoose');

// global variables
const conn = 'mongodb://heroku:golu1030@ds113179.mlab.com:13179/pokemon-fan';

const userSchema = new mongoose.Schema({
	username: {type: String , unique: true},
	password: {type: String},
	firstname: String,
	lastname: String,
	email: String
});
const db = mongoose.createConnection(conn);
const user = db.model('user', userSchema);

module.exports = user;