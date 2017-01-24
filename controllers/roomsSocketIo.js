/**
 * Socket.io room management service 
 */
function RoomSocketIo() {
	var socketio;
	var Comment = require('../models/comment'); // get the mongoose model
	var Question = require('../models/question'); // get the mongoose model
	var Room = require('../models/room'); // get the mongoose model
	var passportConfig = require('../config/passport'); // get auth utils file
	var config = require('../config/database'); // get db config file
	var jwt = require('jwt-simple');
	var User = require('../models/user');

	function setup(io) {
		socketio = io;
		//Listenning for a connection event
		socketio.on("connection", function (socket) {
			//Then for a joinRoom event
			socket.on('joinRoom', function (msg) {
				//Look for the requested room
				Room.findOne({ _id: msg.room }, function (err, room) {
					if (err) { console.log(err); return; }

					if (!room) {
						console.log("Room not found");
						socket.emit("notexist", room);
					} else {
						//If the room has been found, we emit a success
						socket.join(msg.room);
						socket.emit("success", room);
						//And populate the room with its previously submitted questions
						Question.find({ room: msg.room }).populate("comments")
							.exec(function (err, questions) {
								if (err) { console.log(err); return; }
								socket.emit("listQuestions", questions)
							});

						/*And start listenning for each possible event*/

						socket.on('addQuestion', function (msg) {
							if (msg.title != "" && msg.question != "") {
								console.log("addQuestion");
								//Instantiate the new question
								var question = new Question({
									title: msg.title,
									question: msg.question,
									room: msg.room
								});
								// Save the new question
								question.save(function (err) {
									if (err) { console.log(err); return; }
									io.to(msg.room).emit("addQuestion", question);
								});
							}
						});
						socket.on('addComment', function (msg) {
							if (msg.comment != "") {
								var comment = new Comment({
									comment: msg.comment,
									question: msg.question
								});
								// Look for the question and add the new comment
								Question.findOne({ _id: msg.question }, function (err, question) {
									if (err) { console.log(err); return; }
									comment.save(function (err) {
										if (err) { console.log(err); return; }
										question.comments.push(comment);
										question.save(function (err) {
											if (err) { console.log(err); return; }
											console.log("add comment " + comment);
											io.to(msg.room).emit("addComment", comment);
										});
									});
								});
							}
						});
						socket.on('addPlus', function (msg) {
							// Look for the question and update its plus count
							Question.findOne({ _id: msg.question }, function (err, question) {
								if (err) { console.log(err); return; }
								question.plus = question.plus + 1;
								question.save(function (err) {
									if (err) { console.log(err); return; }
									io.to(msg.room).emit("addPlus", question);
								});
							});
						});

						socket.on('removePlus', function (msg) {
							// Look for the question and update its plus count
							Question.findOne({ _id: msg.question }, function (err, question) {
								if (err) { console.log(err); return; }
								question.plus = question.plus - 1;
								question.save(function (err) {
									if (err) { console.log(err); return; }
									io.to(msg.room).emit("removePlus", question);
								});
							});
						});

						socket.on('addMinus', function (msg) {
							// Look for the question and update its minus count
							Question.findOne({ _id: msg.question }, function (err, question) {
								if (err) { console.log(err); return; }
								question.minus = question.minus + 1;
								question.save(function (err) {
									if (err) { console.log(err); return; }
									io.to(msg.room).emit("addMinus", question);
								});
							});
						});

						socket.on('removeMinus', function (msg) {
							// Look for the question and update its minus count
							Question.findOne({ _id: msg.question }, function (err, question) {
								if (err) { console.log(err); return; }
								question.minus = question.minus - 1;
								question.save(function (err) {
									if (err) { console.log(err); return; }
									io.to(msg.room).emit("removeMinus", question);
								});
							});
						});

						socket.on('removeQuestion', function (msg) {
							console.log("Remove question");
							var headers = new Object();
							headers.authorization = msg.token;
							var token = passportConfig.getToken(headers);
							if (token) {
								var decoded = jwt.decode(token, config.secret);
								User.findOne({
									name: decoded.name
								}, function (err, user) {
									if (err) {
										console.log(err);
										return;
									}
									if (user) {
										// Look for the question and delete it
										Question.findOne({ _id: msg.question }, function (err, question) {
											if (err) {
												console.log(err);
												return;
											}
											if (question) {
												io.to(msg.room).emit("removeQuestion", question);
												Question.findOne({ _id: msg.question }).remove().exec();
											} else {
												console.log("Question not found");
											}
										});

									} else {
										console.log("Remove question unauthorized");
									}
								});
							} else {
								console.log("Error in the token");
							}
						});

						socket.on('removeComment', function (msg) {
							console.log("Remove comment");
							var headers = new Object();
							headers.authorization = msg.token;
							var token = passportConfig.getToken(headers);
							if (token) {
								var decoded = jwt.decode(token, config.secret);
								User.findOne({
									name: decoded.name
								}, function (err, user) {
									if (err) {
										console.log(err);
										return;
									}
									if (user) {
										// Look for the comment and delete it
										Comment.findOne({ _id: msg.comment }, function (err, comment) {
											if (err) {
												console.log(err);
												return;
											}
											if (comment) {
												io.to(msg.room).emit("removeComment", comment);
												Comment.findOne({ _id: msg.comment }).remove().exec();
											} else {
												console.log("Comment not found");
											}
										});

									} else {
										console.log("Remove comment unauthorized");
									}
								});
							} else {
								console.log("Error in the token");
							}
						});
					}
				});
			});
		});
	}

	return {
		setup: setup
	}
}

module.exports = new RoomSocketIo();

