function RoomSocketIo(){
    var socketio;
    var Comment = require('../models/comment'); // get the mongoose model
    var Question = require('../models/question'); // get the mongoose model
    var Room = require('../models/room'); // get the mongoose model

    function setup(io){
        socketio = io;
        socketio.on("connection", function(socket){
			console.log("client connecté");
            socket.on('joinRoom', function(msg){
                console.log("joinRoom " + msg.room);
				Room.findOne({_id : msg.room}, function (err, room) {
					if(err) throw err;

					if(!room){
						console.log("Room not found");
						socket.emit("notexist", room);
					} else {
						console.log("Room found " + room);
						socket.join(msg.room);
						socket.emit("success", room);
						Question.find({room: msg.room}).populate("comments")
							.exec(function (err, questions) {
								if (err) throw err;
								socket.emit("listQuestions", questions)
							});


						socket.on('addQuestion', function(msg){
							console.log("addQuestion");
							var question = new Question({
								title: msg.title,
								question: msg.question,
								room: msg.room
							});
							// save the question
							question.save(function(err) {
								if (err) throw err;
								io.to(msg.room).emit("addQuestion", question);
							});
						});
						socket.on('addComment', function(msg){
							var comment = new Comment({
								comment: msg.comment,
								question: msg.question
							});
							// save the comment
							Question.findOne({_id: msg.question}, function(err, question){
								if (err) throw err;
								comment.save(function(err){
									if(err) throw err;
									question.comments.push(comment);
									question.save(function(err) {
										if (err) throw err;
										console.log("add comment " + comment);
										io.to(msg.room).emit("addComment", comment);
									});
								});
							});
						});
						socket.on('addPlus', function(msg){
							// save the comment
							Question.findOne({_id: msg.question}, function(err, question){
								if (err) throw err;
								question.plus = question.plus + 1;
								question.save(function(err) {
									if (err) throw err;
									io.to(msg.room).emit("addPlus", question);
								});
							});
						});
						socket.on('addMinus', function(msg){
							// save the comment
							Question.findOne({_id: msg.question}, function(err, question){
								if (err) throw err;
								question.minus = question.minus + 1;
								question.save(function(err) {
									if (err) throw err;
									io.to(msg.room).emit("addMinus", question);
								});
							});
						});
					}
				});
            });
        });
    }

    return{
        setup: setup
    }
}

module.exports = new RoomSocketIo();

