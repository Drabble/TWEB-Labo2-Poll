var User = require('../models/user');
var Room = require('../models/room');
var passport = require('passport');
var jwt = require('jwt-simple');
var config = require('../config/database'); // get db config file
var passportConfig = require('../config/passport'); // get auth utils file

module.exports = function(app) {
	// route to a restricted info (POST http://localhost:5000/api/rooms)
	app.post('/api/rooms', passport.authenticate('jwt', { session: false}), function(req, res) {
		var token = passportConfig.getToken(req.headers);
		if (token) {
			var decoded = jwt.decode(token, config.secret);
			User.findOne({
				name: decoded.name
			}, function(err, user) {
				if (err)  {console.log(err);return;}

				if (!user) {
					return res.status(403).send({msg: 'Authentication failed. User not found.'});
				} else {
					if (!req.body.name) {
						res.status(400).json({msg: 'Please pass name.'});
					} else {
						var newRoom = new Room({
							name: req.body.name,
						});

						// save the room
						user.rooms.push(newRoom);
						newRoom.save(function(err){
							if (err) {
								return res.status(409).json({msg: 'Room already exists.'});
							}
							user.save(function(err){
								if (err)  {console.log(err);return;}
								res.status(201).json({msg: 'Successfully created new room.', room: newRoom.id});
							})
						});
					}
				}
			});
		} else {
			return res.status(403).send({msg: 'No token provided.'});
		}
	});

	// route to a restricted info (GET http://localhost:5000/api/rooms)
	app.get('/api/rooms', passport.authenticate('jwt', { session: false}), function(req, res) {
		var token = passportConfig.getToken(req.headers);
		if (token) {
			var decoded = jwt.decode(token, config.secret);
			User.findOne({
				name: decoded.name
			}, function(err, user) {
				if (err)  {console.log("Error : " +err);return;}
				if (!user) {
					return res.status(401).send({msg: 'Authentication failed. User not found.'});
				} else {
					res.status(200).json({rooms: user.rooms});
				}
			});
		} else {
			return res.status(401).send({msg: 'No token provided.'});
		}
	});
}
