const mongoose = require('mongoose');
const validator = require('validator');



let blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },

    created: {
        type: Date,
        default: Date.now
    },

    body: {
        type: String,
        required: true
    },

    comments: [{
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
    }]

});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
