const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// global variables
const conn = 'mongodb://heroku:golu1030@ds113179.mlab.com:13179/pokemon-fan';

const schema = mongoose.Schema({
	name:String,
	type:String,
	no:Number
});

// Connecting to dataBase
const db = mongoose.createConnection(conn);
const mymodel = db.model('pokemon',schema);

router.get('/', function(req,res,next){
	mymodel.find({}, function(err,docs){
		
		res.render('highscore',{'title':'Pokemon-Fan',
			'pokemons': docs
		});
	});
});

module.exports = router;