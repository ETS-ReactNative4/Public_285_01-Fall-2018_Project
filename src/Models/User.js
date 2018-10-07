const mongoose = require('mongoose');
const validator = require('validator');

//need to figure out how to push the google signin attributes to this
let userSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
        
        }
    },
    profile_pic: Buffer,

    email: String,
    OAuth_token: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;