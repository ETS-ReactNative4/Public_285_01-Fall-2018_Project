const mongoose = require('mongoose');

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

    email:{ 
        type: String,
        required: true
    },

    OAuth_token: {
        type: [String, Date],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;