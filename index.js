/**
 * Entry point of the Pollspeak web app, it uses Express 4 to render the Angular 1 app
 *
 * @summary   Entry point of Pollspeak web app
 *
 * @link https://tweb-interactive-polls.herokuapp.com/
 * @author Antoine Drabble
 * @author Guillaume Serneels
 *
 */

// TODO Add admin buttons and implement
// TODO show chart.js graph

// TODO Commenter
// TODO Indenter

var express     = require('express');
var app         = express();
var request     = require('request-promise');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport    = require('passport');
var config      = require('./config/database'); // get db config file
var port        = process.env.PORT || 5000;
var http        = require('http');
var server      = http.createServer(app);
var io          = require('socket.io').listen(server);

// Set up the app
app.use(bodyParser.urlencoded({ extended: false })); // get our request parameters
app.use(bodyParser.json());
app.use(morgan('dev')); // log to console
app.use(passport.initialize()); // Use the passport package in our application
app.set('port', port); // Set the port
app.use(express.static(__dirname + '/public')); //App files located in /public
app.set('views', __dirname + '/views'); // views is the directory for all template files
app.set('view engine', 'ejs');// connect to database

// Connect mongodb to the database
mongoose.connect(config.database);

// pass passport for configuration
require('./config/passport')(passport);

// The root url of the website serves the Angular app
app.get('/', function (request, response) {
  response.render('pages/index');
});

// Require the socketio room service
require('./controllers/roomsSocketIo.js').setup(io);

// Require the controllers
require('./controllers/rooms')(app);
require('./controllers/users')(app);

// Start the Express app
server.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
