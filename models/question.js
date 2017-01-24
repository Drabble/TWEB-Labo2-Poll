var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./comment');


// set up a mongoose model for Questions
var QuestionSchema = new Schema({
    title: {
        type: String,
        unique: false,
        required: true,
		minlength: 1,
		maxlength: 50
    },
    question: {
        type: String,
        required: true,
		minlength: 1,
		maxlength: 400
    },
    plus: {
        type: Number,
        required: true,
        default: 0
    },
    minus: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Date,
        default: new Date()
    },
    comments:[
        {type: Schema.Types.ObjectId, ref: 'Comment'}
    ],
	room: {type: Schema.Types.ObjectId, ref: 'Room'}
},
{
	timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);
