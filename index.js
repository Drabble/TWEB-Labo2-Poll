/**
 * Entry point of the github explorer web app, it uses Express 4 to render the Angular 1 app and
 * it provides the REST api needed for the features.
 *
 * @summary   Entry point of the github explorer web app
 *
 * @link https://tweb-github-explorer.herokuapp.com/
 * @author Antoine Drabble
 * @author Guillaume Serneels
 * 
 */
var express = require('express');
var app = express();
var request = require('request-promise');

// Use bodyParser to parse POST parameters in HTTP requests
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.json());       // to support JSON-encoded bodies

app.set('port', (process.env.PORT || 5000));

//App files located in /public
app.use(express.static(__dirname + '/public'));

// views is the directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// The root url of the website serves the Angular app
app.get('/', function (request, response) {
  response.render('pages/index');
});

// Start the Express app
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
