function RoomService(){
    var socketio;
    var Room = require('../models/room'); // get the mongoose model

    function setup(io){
        socketio = io;
        socketio.on("connection", function(socket){
            socket.on('joinRoom', function(msg){
                socket.join(msg.room)
                io.to('auth').emit('user connection', {"username" : msg.user});
                Room.find({}, function(err, rooms) {
                    socket.emit(rooms);
                });
            });
            socket.on('')
        });

        // Quand on join une room, on envoie la liste des questions.
        // On addQuestion, on prend l'id de la room et la question, on l'ajoute et on notifie tout les gens qui sont souscris à la room !'
        // On add comment
        // on plus 
        // on minus
    }

    function retrieveQuestions(){
        
    }

    function addQuestion(){

    }

    function addComment(){

    }

    function plusQuestion(){

    }

    function minusQuestion(){

    }

    return{
        setup: setup,
        retrieveQuestions,
        addQuestion: addQuestion,
        addComment: addComment,
        plusQuestion: plusQuestion,
        minusQuestion: minusQuestion
    }
}

module.exports = new RoomService();

