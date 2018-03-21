var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('menu', { 'title': 'Pokemon-fan'});
  console.log('menu loaded');
});

module.exports = router;