const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
        
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now 
    }
});

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;