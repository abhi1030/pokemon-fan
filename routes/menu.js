var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(!req.session.username){
		return res.redirect('/');
	}
  res.render('menu', { 'title': 'Pokemon-fan'});
});



module.exports = router;