var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var QuestionSchema = new Schema({
    title: {
        type: String,
        unique: false,
        required: true
    },
    question: {
        type: Boolean,
        required: true
    },
});
 
module.exports = mongoose.model('Question', QuestionSchema);