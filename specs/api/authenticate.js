var authenticate = require("./support/authenticate.js");
var signup = require("./support/signup.js");
var chai = require("chai");
chai.should();
chai.use(require('chai-things'));

describe("The /authenticate endpoint", function(){
    it("should allow a registered user to get a JSON Web Token", itShouldAllowARegisteredUserToGetAJSONWebToken);
    it("should refuse to send a JSON Web Token if password is wrong", itShouldRefuseToSendAJSONWebTokenIfPasswordIsWrong);

});

function itShouldAllowARegisteredUserToGetAJSONWebToken(){
    var user = signup.generateUser();
    var credentials = {
        name: user.name,
        password: user.password
    }
    return signup.signup(user)
        .then(function(response) {
            return authenticate.authenticate(credentials);
        })
        .then(function(response) {
            response.status.should.equal(200);
            response.body.should.not.be.empty;
            return response;
        });
}

function itShouldRefuseToSendAJSONWebTokenIfPasswordIsWrong() {
    var user = signup.generateUser();
    var credentials = {
        name: user.name,
        password: "correctPassword"
    }
    return signup.signup(user)
        .then(function(response) {
            credentials.password = "incorrectPassword";
            return authenticate.authenticate(credentials);
        })
        .then(function(response) {
            response.status.should.equal(401);
            return response;
        })

}

