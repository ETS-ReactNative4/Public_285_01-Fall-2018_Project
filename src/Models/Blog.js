const mongoose = require('mongoose');
const Comment = require('../Models/Comment');


let blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,"A blog must have a name!"],
        trim: true
    },

    
    blog_text: {
        type: String,
        required: [true, "No blank posts"],
    },

    comments: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Comment'
    }],

    created: {
        type: Date,
        default: Date.now
    }

});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
