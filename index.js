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

// TODO à deux endroit on a l'url hardcodée dans Angular
// TODO Fix le problème de l'injection avec grunt
// TODO Clean le projet les dépendences...
var express     = require('express');
var app         = express();
var request     = require('request-promise');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	  = require('passport');
var config      = require('./config/database'); // get db config file
var User        = require('./models/user'); // get the mongoose model
var Room        = require('./models/room'); // get the mongoose model
var Question    = require('./models/question'); // get the mongoose model
var port        = process.env.PORT || 5000;
var jwt         = require('jwt-simple');
var http        = require('http');
var io          = require('socket.io');
var server      = http.createServer(app);
var io          = io.listen(server);



// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// log to console
app.use(morgan('dev'));
 
// Use the passport package in our application
app.use(passport.initialize());

// Set the port
app.set('port', port);

//App files located in /public
app.use(express.static(__dirname + '/public'));

// views is the directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// The root url of the website serves the Angular app
app.get('/', function (request, response) {
  response.render('pages/index');
});

// connect to database
mongoose.connect(config.database);
 
// pass passport for configuration
require('./config/passport')(passport);
 
// bundle our routes
var apiRoutes = express.Router();
 
// create a new user account (POST http://localhost:8080/api/signup)
apiRoutes.post('/signup', function(req, res) {
  if (!req.body.name || !req.body.password) {
    res.json({success: false, msg: 'Please pass name and password.'});
  } else {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

// route to a restricted info (GET http://localhost:5000/api/account)
apiRoutes.get('/account', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, username: user.name});
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
});

// route to a restricted info (GET http://localhost:5000/api/rooms)
apiRoutes.post('/rooms', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          if (!req.body.name) {
            res.json({success: false, msg: 'Please pass name.'});
          } else {
            var newRoom = new Room({  
              name: req.body.name,
              temporary: req.body.temporary
            });

            // save the room
            user.rooms.push(newRoom);
            user.save(function(err) {
              if (err) {
                return res.json({success: false, msg: 'Room already exists.'});
              }
              res.json({success: true, msg: 'Successfully created new room.', room: newRoom.id});
            });
          }
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
});

// route to a restricted info (GET http://localhost:5000/api/account)
apiRoutes.get('/rooms', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, rooms: user.rooms});
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
});
 
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

var roomService = require('./controllers/roomservice.js');
roomService.setup(io);
 
// connect the api routes under /api/*
app.use('/api', apiRoutes);

// Start the Express app
server.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
