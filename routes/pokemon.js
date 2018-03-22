const express = require('express');
const router = express.Router();

// importing pokemon schema
const pokemon = require('../lib/pokemon');

router.get('/',function(req,res,next){
		pokemon.find({}, function(err , pokemons){
			if(err){
				console.log(err);
				return res.status(500).send();
			}
			res.render('pokemon',{ 'pokemons': pokemons , 'title': "Pokemon-Fan", 'message':""});
		});
});

router.post('/',function(req,res){
	const name = req.body.name;
	const type = req.body.type;
	const no = req.body.no;
	const hp = req.body.hp;
	const attack = req.body.attack;
	const defence = req.body.defence;
	const speed = req.body.speed;
	const level = req.body.level;
	const exp = req.body.exp;
	const one = req.body.one;
	const two = req.body.two;
	const three = req.body.three;
	const four = req.body.four;
	
	const poke = new pokemon();
	
	pokemon.findOne({no: no },function(err, found){
		if(err){
			res.redirect('/pokemon');
		}
		if(!found){
			poke.name = name;
			poke.type = type;
			poke.no = no;
			poke.hp = hp;
			poke.attack = attack;
			poke.defence = defence;
			poke.speed = speed;
			poke.level = level;
			poke.exp = exp;
			poke.moves.one = one;
			poke.moves.two = two;
			poke.moves.three = three;
			poke.moves.four = four;
			
			poke.save(function(err, pokesave){
				if(err){
					console.log('data already exist');
					res.redirect("/pokemon");
				}
				pokemon.find({},function(err, pokemons){
					res.render('pokemon',{'title':'Pokemon-Fan','message':'pokemon added successfully!','pokemons':pokemons});
				});
			});
			
		
		}
		found.update({name:name,type:type,hp:hp,attack:attack,defence:defence,speed:speed,level:level,exp:exp,moves:{one:one,two:two,three:three,four:four}},function(err,done){
			if(err){
				res.redirect('/pokemon');
			}
			pokemon.find({},function(err, pokemons){
				res.render('pokemon',{'tite':'Pokemon-Fan','message':'pokemon Data updated','pokemons':pokemons});
			
			});
		});
		
	});
});

module.exports = router;