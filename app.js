const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

const PORT = process.env.PORT || 5000

// creating routes
const home = require('./routes/index');
const menu = require('./routes/menu');
const game = require('./routes/game');
const highscore = require('./routes/highscore');
const pokemon = require('./routes/pokemon');

const app = express();


// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine' , 'pug');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(session({secret:"abcdefghijklm", resave:false,saveUninitialized:true}));
app.use(express.static(path.join(__dirname, 'public')));

// routing the views
app.use('/', home);
app.use('/menu', menu);
app.use('/game', game);
app.use('/highscore', highscore);
app.use('/pokemon', pokemon);

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