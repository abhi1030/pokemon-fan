const mongoose = require('mongoose');

// global variables
const conn = 'mongodb://heroku:golu1030@ds113179.mlab.com:13179/pokemon-fan';

const pokemonSchema = new mongoose.Schema({
	name: String,
	type: String,
	moves: {
		one: String,
		two: String,
		three: String,
		four: String
	},
	no: {type: Number, unique: true},
	hp: Number,
	speed: Number,
	attack: Number,
	defence: Number,
	level: Number,
	exp: Number,
});
const db = mongoose.createConnection(conn);
const pokemon = db.model('pokemon', pokemonSchema);

module.exports = pokemon;