function RoomService(){
    var socketio;
    var Comment = require('../models/comment'); // get the mongoose model
    var Question = require('../models/question'); // get the mongoose model
    var Room = require('../models/room'); // get the mongoose model

    function setup(io){
        socketio = io;
        socketio.on("connection", function(socket){
            socket.on('joinRoom', function(msg){
                console.log("joinRoom");
                socket.join(msg.room)
                Comment.find({})
                    .exec(function(err, comments) {
                        console.log(comments);
                    });
                Question.find({}).populate("comments")
                    .exec(function(err, questions) {
                        /*for(var question in questions){
                            for(var comment in questions[question].comments){
                                questions[question].comments[comment] = Comment.find({ "_id": questions[question].comments[comment]});
                            }
                        }*/
                        if(err) throw err;
                        socket.emit("listQuestions", questions)
                });
            });
            socket.on('addQuestion', function(msg){
                console.log("addQuestion");
                var question = new Question({
                    title: msg.title,
                    question: msg.question
                });
                // save the question
                question.save(function(err) {
                    if (err) throw err;
                    io.to(msg.room).emit("addQuestion", question);
                });
            });
            socket.on('addComment', function(msg){
                var comment = new Comment({
                    comment: msg.comment
                });
                // save the comment
                Question.findOne({_id: msg.question}, function(err, question){
                    if (err) throw err;
                    comment.save(function(err){
                        question.comments.push(comment);
                        question.save(function(err) {
                            if (err) throw err;
                            io.to(msg.room).emit("addComment", comment);
                            console.log(question);
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
        });
    }

    return{
        setup: setup
    }
}

module.exports = new RoomService();

