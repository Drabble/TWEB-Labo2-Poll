var signup = require("./support/signup.js");
var chai = require("chai");
chai.should();
chai.use(require('chai-things'));

describe("The /signup endpoint", function(){
    it("should allow to create a new account", itShouldAllowToCreateANewAccount);
    it("should refuse to create an account if mandatory fields are not provived");
    it("should refuse to create an account if the provided username is not available");

});

function itShouldAllowToCreateANewAccount(){
    var payload = signup.generateUser();
    return signup.signup(payload)
        .then(function(response){
            response.status.should.equal(201);
            return response;
        });

}