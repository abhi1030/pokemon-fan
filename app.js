var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

// creating routes
var home = require('./routes/index');
var menu = require('./routes/menu');
var game = require('./routes/game');
var highscore = require('./routes/highscore');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine' , 'pug');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routing the views
app.use('/', home);
app.use('/menu', menu);
app.use('/game', game);
app.use('/highscore',highscore);

/* app.get('/',function(req,res){
	 res.sendFile(__dirname + '/public/index.html');
 });
 */
app.listen(PORT, function(err , result){
	if(err){
		colsole.log(err);
	}
	console.log('server started on port ' + PORT);
});