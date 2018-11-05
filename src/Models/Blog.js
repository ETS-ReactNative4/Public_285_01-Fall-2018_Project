const mongoose = require('mongoose');



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
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        body: {
            type: String,
            required: true,
        },
        created: {
            type: Date,
            default: Date.now 
        }
    }],

    created: {
        type: Date,
        default: Date.now
    }

});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
