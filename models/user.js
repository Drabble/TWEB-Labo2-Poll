var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcryptjs = require('bcryptjs');
var Room = require('./room');

// set up a mongoose model for Users 
var UserSchema = new Schema({
  	name: {
        type: String,
        unique: true,
        required: true,
		minlength: 1,
		maxlength: 50
    },
  	password: {
        type: String,
        required: true,
		minlength: 1,
		maxlength: 1000
    },
	firstname: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 50
	},
	lastname: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 100
	},
	email: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 100
	},
  	rooms:[
        {type: Schema.Types.ObjectId, ref: 'Room'}
    ]
},
{
	timestamps: true
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcryptjs.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcryptjs.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcryptjs.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
