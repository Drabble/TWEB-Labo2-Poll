var apiPrefix = "http://localhost:3000";
var api = require("supertest-as-promised")(apiPrefix);
var Chance = require("chance");
var chance = new Chance();



function signup(user){
    return api
        .post('/signup')
        .set('Content-Type', 'application/json')
        .send(user)
        .then(function(response) {
            return response;
        });
}

function generateUser(){
    return {
        name: chance.first(),
        password: "supersecretpassword"
    }

}


module.exports = {
    generateUser: generateUser,
    signup: signup
}