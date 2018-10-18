const Blog = require('../Models/Blog');
const Product = require('../Models/Product');

//Dummy controller methods for the Blog-page

//Displays the blog creation form with GET
exports.blog_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog create GET")
}

//Handles Blog create on POST
exports.blog_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog create POST")
}

//Displays the Blog update-form on this GET
exports.blog_create_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog update GET")
}

//Handles the Blog update on this POST
exports.blog_create_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog update POST")
}

// Displays the Delete notification on GET
exports.blog_create_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog delete GET")
}

//Handles the deletion of a blog-post
exports.blog_create_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog delete POST")
}

//Displays the blog blurb on GET
exports.blog_blurbs = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog blurbs");
}

//Displays the full Blog (Title, Body, and Author) on GET
exports.full_blog = (req, res, next) => {
    res.send("NOT IMPLEMENTED: Full blog-post"+ req.param.id +"'s presentation")
}

//Displays the comments of the Blog
exports.blog_comments = (req, res) => {
    res.send("NOT IMPLEMENTED: blog-post's"+ req.param.id+"'s comments")
}

//Dummy controller Methods for the Store

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