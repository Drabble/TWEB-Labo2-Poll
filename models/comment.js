var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var CommentSchema = new Schema({
    comment: {
        type: String,
        unique: false,
        required: true,
		minlength: 1,
		maxlength: 200
    },
    date: {
        type: Date,
        default: new Date()
    },
    question: {type: Schema.Types.ObjectId, ref: 'Question'}
},
{
	timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);
