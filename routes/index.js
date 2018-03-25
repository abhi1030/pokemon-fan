var express = require('express');
var router = express.Router();

var user = require('../lib/user');

router.get('/', function(req, res, next) {
  res.render('index' , { 'title': 'Pokemon-Fan',name: 'Abhishek'});
});


router.post('/login', function(req,res){
	var username = req.body.username;
	var password = req.body.password;

	user.findOne({username: username, password: password}, function(err,registeredUser){
		if(err){
			return res.send(err);
		}
		if(!registeredUser){
			return res.redirect('/');
		}
		req.session.username = username;
		res.redirect('/menu');
	});
});


router.post('/register',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var email = req.body.email;
	
	
	user.findOne({username: username}, function(err,found){
		if(err){
			console.log(err);
		}
		if(!found){
			var newUser = new user();
			newUser.username = username;
			newUser.password = password;
			newUser.firstname = firstname;
			newUser.lastname = lastname;
			newUser.email = email;
	
			newUser.save(function(err , savedUser){
				if(err){
					console.log(err);
					return res.status(500).send();
				}
				if(savedUser){
					req.session.username = username;
				}
				res.redirect('/menu');
			});

		}
		if(found){
			res.redirect('/')
		}
	});
	
	
});

router.post('/logout', function(req,res){
	req.session.destroy(function(err){
		return res.redirect('/');
	});
});

module.exports = router;