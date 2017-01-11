var authenticate = require("../api/support/authenticate.js");
var signup = require("../api/support/signup.js");
var rooms = require("../api/support/rooms.js");

var socketIoUrl = "http://localhost:5000";

var chai = require("chai");
chai.should();

var io = require('socket.io-client');

var options = {
    timeout: 2000
}

describe("The socket.io server", function () {
    this.timeout(3000);

    it("should allow a client to join a room", itShouldAllowAClientToJoinARoom);
    it("should allow a client to effectievely add a question to a room", itShouldAllowAClientToEffectievelyAddAQuestionToARoom)
});

function itShouldAllowAClientToJoinARoom() {

    var user = signup.generateUser();

    var credentials = {
        name: user.name,
        password: user.password
    }

    var payload = rooms.generateRoom();

    return signup.signup(user)
        .then(function (response) {
            return authenticate.authenticate(credentials);
        })
        .then(function (response) {
            var jsonWebToken = response.body.token;
            return rooms.createRoom(payload, jsonWebToken);
        })
        .then(function (response) {
            response.status.should.equal(201);
            return response;
        })
        .then(function (response) {

            var deferred = Promise.defer();

            var roomNbr = response.body.room;

            var client = io(socketIoUrl);

            client.on('connect', function (data) {
                client.emit("joinRoom", { room: roomNbr });

                client.on("listQuestions", function (questions) {
                    questions.should.be.an.array;
                    questions.should.be.empty;
                    deferred.resolve();
                });
            });
            return deferred.promise;
        });
}

function itShouldAllowAClientToEffectievelyAddAQuestionToARoom() {

    var user = signup.generateUser();

    var credentials = {
        name: user.name,
        password: user.password
    }

    var payload = rooms.generateRoom();
    var roomNbr;

    return signup.signup(user)
        .then(function (response) {
            return authenticate.authenticate(credentials);
        })
        .then(function (response) {
            var jsonWebToken = response.body.token;
            return rooms.createRoom(payload, jsonWebToken);
        })
        .then(function (response) {

            var deferred = Promise.defer();

            roomNbr = response.body.room;

            var myquestion = {
                room: roomNbr,
                title: "Testing question",
                question: "Is it working yet?"
            }
            var client = io(socketIoUrl);

            client.on('connect', function (data) {

                client.emit("addQuestion", myquestion);
                client.emit("joinRoom", { room: roomNbr });
                client.on("listQuestions", function (questions) {

                            questions.should.be.an.array;
                            questions.should.not.be.empty;

                            for (var question in questions) {
                                console.log("list Questions");

                                if (questions[question].title == myquestion.title) {
                                    questions[question].question.should.equal(myquestion.question);
                                    deferred.resolve();
                                }
                            }

                        });

            });
            return deferred.promise;
        });
}

