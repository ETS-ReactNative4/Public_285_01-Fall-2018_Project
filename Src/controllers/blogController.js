const Blog = require('../Models/Blog');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');



//Displays the blog creation form with GET
exports.blog_create_get = (req, res) => {
    console.log("Blog_Create_GET has been hit!")
    res.sendFile('form.html', { root: path.join(__dirname, '../public') });    
}

//Handles Blog create on POST
exports.blog_create_post = (req, res) => {
   console.log("Blog_Create_post has been hit!")
    let newBlog = new Blog({
        title: req.body.title,
        blog_text: req.body.blog_text,
        comments: req.body.comment
    });
    
    newBlog.save((err,doc) => {
        if(err){
            console.log(err)
            return 
        }
        res.status(200).send(doc);
        console.log(doc)
    },

    
    )}

//Displays the Blog update-form on this GET
exports.blog_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog update GET")
}

//Handles the Blog update on this POST
exports.blog_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog update POST")
}

// Displays the Delete notification on GET
exports.blog_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog delete GET")
}

//Handles the deletion of a blog-post
exports.blog_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog delete POST")
}

//Displays the blog blurbs on GET
exports.blog_blurbs = (req, res) => {
   
}

//Displays the full Blog (Title, Body, and Author) on GET
exports.full_blog = (req, res, next) => {
    res.send("NOT IMPLEMENTED: Full blog-post"+ req.param.id +"'s presentation")
    
}

//Displays the comments of the Blog on GET
exports.blog_comments = (req, res) => {
    res.send("NOT IMPLEMENTED: blog-post's"+ req.param.id+"'s comments")
}
