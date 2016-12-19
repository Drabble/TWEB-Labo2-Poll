var signup = require("./support/signup.js");
var chai = require("chai");
chai.should();
chai.use(require('chai-things'));

describe("The /signup endpoint", function(){
    it("should allow to create a new account", itShouldAllowToCreateANewAccount);
    it("should refuse to create an account if mandatory fields are not provived", itShouldRefuseToCreateAnAccountIfMandatoryFieldsAreNotProvided);
    it("should refuse to create an account if the provided username is not available", itShouldRefuseToCreateAnAccountIfUsernameIsNotAvailable);

});

function itShouldAllowToCreateANewAccount(){
    var payload = signup.generateUser();
    return signup.signup(payload)
        .then(function(response){
            response.status.should.equal(201);
            return response;
        });
}

function itShouldRefuseToCreateAnAccountIfMandatoryFieldsAreNotProvided(){

    var payload = signup.generateUser();
    var original = JSON.stringify(payload);

    var wrongPayloads = [];
    for (var i=0; i<2; i++) {
        wrongPayloads.push(JSON.parse(original));
    }
    delete wrongPayloads[0].name;
    delete wrongPayloads[1].password;

    var promises = wrongPayloads.map(p => signup.signup(p));

    return Promise.all(promises)
    .then(function(responses) {
        responses.forEach(r => (r.status.should.equal(422)));
    });

}

function itShouldRefuseToCreateAnAccountIfUsernameIsNotAvailable(){

    var user1 = signup.generateUser();
    var user2 = signup.generateUser();

    user2.name = user1.name;

    return signup.signup(user1)
        .then(function(response){
            response.status.should.equal(201)
            return signup.signup(user2);
        })
        .then(function(response){
            response.status.should.equal(409);
        })
}