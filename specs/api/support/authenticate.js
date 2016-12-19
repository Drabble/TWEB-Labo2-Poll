var apiPrefix = "http://localhost:5000/api";
var api = require("supertest-as-promised")(apiPrefix);


function authenticate(credentials) {
    return api
        .post('/authenticate')
        .set('Content-type', 'application/json')
        .send(credentials)
        .then(function(response) {
            return response;
        });
}

module.exports = {
    authenticate: authenticate
}