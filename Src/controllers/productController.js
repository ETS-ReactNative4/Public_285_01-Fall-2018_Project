const Product = require('../Models/Product');


//Displays the product creation form with GET
exports.product_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Product create GET")
}

//Handles product create on POST
exports.product_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Product create POST")
}

//Displays the product update-form on this GET
exports.product_create_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Product update GET")
}

//Handles the product update on this POST
exports.product_create_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Product update POST")
}

// Displays the Delete notification on GET
exports.product_create_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Product delete GET")
}

//Handles the deletion of a blog-post
exports.product_create_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Product delete POST")
}

//Displays the product sample on GET
exports.product_sample = (req, res) => {
    res.send("NOT IMPLEMENTED: Product samples");
}

//Displays the full product (name, description, price, seller) on GET
exports.full_product = (req, res) => {
    res.send("NOT IMPLEMENTED: Full product number "+ req.param.id +"'s presentation")
}