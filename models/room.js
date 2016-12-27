var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('./question');

// set up a mongoose model
var RoomSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    }
});

module.exports = mongoose.model('Room', RoomSchema);
