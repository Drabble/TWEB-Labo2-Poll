var apiPrefix = "http://localhost:5000/api";
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
        name: chance.word(),
        password: "supersecretpassword",
        email:chance.email(),
        firstname: chance.first(),
        lastname: chance.last({ nationality: "it" })
    }

}


module.exports = {
    generateUser: generateUser,
    signup: signup
}