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
                Question.find({})
                    .populate('comments')
                    .exec(function(err, questions) {
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
                Question.findOne({id: msg.question}, function(err, question){
                    if (err) throw err;
                    question.comments.push(comment);
                    question.save(function(err) {
                        if (err) throw err;
                        io.to(msg.room).emit("addComment", comment);
                    });
                });
            });
            socket.on('addPlus', function(msg){
                // save the comment
                Question.findOne({id: msg.question}, function(err, question){
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
                Question.findOne({id: msg.question}, function(err, question){
                    if (err) throw err;
                    question.minus = question.minus + 1;
                    question.save(function(err) {
                        if (err) throw err;
                        io.to(msg.room).emit("addMinus", {question: question});
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

