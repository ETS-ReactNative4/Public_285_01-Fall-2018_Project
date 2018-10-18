const mongoose = require('mongoose');


let podcastSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        validate: {
            validator: function(text) {
                return text === "" || " ";
            },
            message: "Title cannot be blank!"
        }
    },
    
    summary: {
        type: String,
        required: true,
        validate: {
            validator: function(text) {
                return text === "" || " ";
            },
            message: "There must be a summary!"
        }
    },
    podcast_file: {
        type: Buffer,
        required: true,
        validate: {
            validator: function(Buffer) {
                return Buffer ;//need to figure out what to label the return as.
            },
            message: "You need an audio-file to play!"
        }

    }
});

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;