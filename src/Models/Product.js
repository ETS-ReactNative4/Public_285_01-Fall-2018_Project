const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    imagePath: {
        data: Buffer, 
        contentType: String,
        required : true
    },
    title: {
        type: String, 
        required: true
    },

    description: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    }
}, {timestamps: true}
);

module.exports = mongoose.model('Product', productSchema);
