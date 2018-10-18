const Blog = require('../Models/Blog');


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

//Displays the comments of the Blog on GET
exports.blog_comments = (req, res) => {
    res.send("NOT IMPLEMENTED: blog-post's"+ req.param.id+"'s comments")
}
