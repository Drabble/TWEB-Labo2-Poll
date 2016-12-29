

var socketIoUrl = "http://localhost:5000/api";

var chai = require("chai");
chai.should();

var io = require('socket.io-client');

describe("The socket.io server", function(){
    this.timeout(3000);

    it("should allow a client to join a room", itShouldAllowAClientToJoinARoom);
});

function itShouldAllowAClientToJoinARoom(){

    var options = {
        timeout : 2000
    }

    var client = io.connect(socketIoUrl, options);

    var deferred = Promise.defer();

    client.on("connect",function(data) {
        client.emit("joinRoom", {room: 1});

        client.on("listQuestions", function(questions){
            questions.should.be.an.array;

        });
    });


}

