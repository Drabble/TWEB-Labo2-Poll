var apiPrefix = "http://localhost:5000/api";
var api = require("supertest-as-promised")(apiPrefix);
var Chance = require("chance");
var chance = new Chance();

function getRooms(jsonWebToken) {
    var request = api.get("/rooms");
    if(jsonWebToken != undefined){
        request.set('Authorization', 'Bearer ' + jsonWebToken)
    }
    return request
        .then(function(response){
            return response
        });
}

function generateRoom(){
    return{
        name: chance.word(),
        temporary: true
    }
}

function createRoom(room,jsonWebToken){
    return api
        .post('/rooms')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + jsonWebToken)
        .send(room)
        .then(function(response){
            return response;
        });

}

module.exports = {
    getRooms: getRooms,
    generateRoom: generateRoom,
    createRoom: createRoom
}