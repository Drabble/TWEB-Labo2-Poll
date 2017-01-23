var authenticate = require("./support/authenticate.js");
var signup = require("./support/signup.js");
var rooms = require("./support/rooms.js");

var jwt = require('jwt-simple');
var config = require('../../config/database'); // get db config file

var chai = require("chai");
chai.should();
chai.use(require('chai-things'));

describe("The /room endpoint", function () {
    it("should allow a user to register, login and create a new room", itShouldAllowAUserToRegisterLoginAndCreateANewRoom);
    it("should allow a user to register, login and get the list of all the rooms he has created", itShouldAllowAUserToRegisterLoginAndGetTheListOfAllTheRoomsHeHasCreated);
    //it("should NOT allow a user that is not authenticated to get the list of all rooms", itShouldNotAllowAUserThatIsNotAuthenticatedToGetTheListOfAllRooms);
    it("should NOT allow a user with a fake JSON Web Token to get the list of all rooms", itShouldNotAllowAUserWithAFakeJSONWebTokenToGetTheListOfAllRooms);
});

function itShouldAllowAUserToRegisterLoginAndCreateANewRoom() {
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
        });
}

function itShouldAllowAUserToRegisterLoginAndGetTheListOfAllTheRoomsHeHasCreated() {
    var user = signup.generateUser();
    var credentials = {
        name: user.name,
        password: user.password
    }
    return signup.signup(user)
        .then(function (response) {
            return authenticate.authenticate(credentials);
        })
        .then(function (response) {
            var jsonWebToken = response.body.token;
            return rooms.getRooms(jsonWebToken);
        })
        .then(function (response) {
            response.status.should.equal(200);
            response.body.rooms.should.be.an("array");
            return response;
        });
}


function itShouldNotAllowAUserWithAFakeJSONWebTokenToGetTheListOfAllRooms() {
    var user1 = signup.generateUser();
    var user2 = signup.generateUser();

    var credentials = {
        name: user1.name,
        password: user1.password
    }

    //generate a fake token
    jsonWebToken = "fakerthanfaketoken";

    return rooms.getRooms(jsonWebToken)
        .then(function (response) {
            console.log(response.body.msg);
            response.status.should.equal(403);
            return response;
        });


}

