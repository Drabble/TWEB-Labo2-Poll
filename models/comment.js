var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var CommentSchema = new Schema({
    comment: {
        type: String,
        unique: false,
        required: true
    },
    date: { 
        type: Date, 
        default: new Date()
    },
});
 
module.exports = mongoose.model('Comment', CommentSchema);