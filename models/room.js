var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('./question');

// set up a mongoose model for Rooms
var RoomSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true,
		minlength: 1,
		maxlength: 50

    }
},
{
	timestamps: true
});

module.exports = mongoose.model('Room', RoomSchema);
