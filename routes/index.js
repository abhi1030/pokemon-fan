var express = require('express');
var router = express.Router();

var user = require('../lib/user');

router.get('/', function(req, res, next) {
  res.render('index' , { 'title': 'Pokemon-Fan',name: 'Abhishek'});
});

router.post('/register',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var email = req.body.email;
	
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
		res.redirect('/menu');
	});
});

module.exports = router;