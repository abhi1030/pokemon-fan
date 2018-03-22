const express = require('express');
const router = express.Router();

const pokemon = require('../lib/pokemon');

//const pokelist = new pokemon();
router.get('/', function(req,res,next){
	pokemon.find({}, function(err,docs){
		if(err){
			console.log(err);
		}
		res.render('highscore',{'title':'Pokemon-Fan',
			'pokemons': docs
		});
	});
});

module.exports = router;