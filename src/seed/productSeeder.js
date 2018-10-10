const Product = require('../Models/Product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

const products = [
    new Product({
    imagePath: "https://1.bp.blogspot.com/-STXLqSdhkqs/UWVT8z02sbI/AAAAAAAC6J0/mvW8SvUPcBs/s400/Gatsby___1A.jpg",
    title: 'Book1',
    description: 'Good Book !!!!!',
    price: 10
}),
    new Product({
    imagePath: "https://1.bp.blogspot.com/-STXLqSdhkqs/UWVT8z02sbI/AAAAAAAC6J0/mvW8SvUPcBs/s400/Gatsby___1A.jpg",
    title: 'Book2',
    description: 'Great Book !!!!!',
    price: 11
}),
    new Product({
    imagePath: "https://1.bp.blogspot.com/-STXLqSdhkqs/UWVT8z02sbI/AAAAAAAC6J0/mvW8SvUPcBs/s400/Gatsby___1A.jpg",
    title: 'Book3',
    description: 'Amazing Book !!!!!',
    price: 12
})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
mongoose.disconnect();
}