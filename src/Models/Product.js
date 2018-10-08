const mongoose = require('mongoose');
const validator = require('validator');


let productSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,

    product_img: Buffer,

    name: {
        type: String,
        required: true,
        validate: {
            validator: function(text) {
                return text === "" || " ";
            },
            message: "Product must have a name!"
        }
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: function(text) {
                return text === "" || " ";
            },
            message: "There must be a description!"
        }
    },
    stock: {
        type: Number,
        required: true,
        validate: {
            validator: function(text) {
                return NaN;
            },
            message: "Users need to know how much product there is!"
        }
    },
    rating: [{
        summary: String,
        detail: String,
        numberOfStars: {
            type: Number,
            required: true,
            validate: {
                validator: function(text) {
                    return NaN;
                },
                message: "Rating must be from 0-5!"
            }
        },
        created: {
            type: Date,
            default: Date.now
        }
    }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
