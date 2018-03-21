const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

// global constiables
const conn = 'mongodb://heroku:golu1030@ds113179.mlab.com:13179/pokemon-fan';


// creating routes
const home = require('./routes/index');
const menu = require('./routes/menu');
const game = require('./routes/game');
const highscore = require('./routes/highscore');

const app = express();


// connecting to dataBase
const db = mongoose.createConnection(conn);


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