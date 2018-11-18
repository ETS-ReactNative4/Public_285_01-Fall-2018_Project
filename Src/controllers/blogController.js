const Blog = require('../Models/Blog');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const Comment = require('../Models/Comment')


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
    });
    
    newBlog.save((err,doc) => {
        if(err) return console.log(err);
        
        else{
            console.log(doc)   
            res.status(200).redirect("./");
        }
    },


    )}

//Displays the Blog update-form on this GET
exports.blog_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog Update GET")
}

//Handles the Blog update on this PATCH
exports.blog_update_patch = (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['title','blog_text','comments'])

    console.log(body);

    if (!ObjectID.isValid(id)){
        return res.status(404).send({id : "There is no such post!"});
    } 

    Blog.findByIdAndUpdate(id, {$set: body}, {new : true}).then((Blog) =>{
        if(!Blog){
            return res.status(404).send({msg : "Something went wrong. Please, try again later"});
        }
        res.send({Blog});


    }).catch((e) => {
        res.status(400).send();
    })
}

// Displays the Delete notification on GET
exports.blog_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Blog delete GET")
}

//Handles the deletion of a blog-post
exports.blog_delete_post = (req, res) => {
    let id = req.params.id;
    console.log(id);

    if (!ObjectID.isValid(id)){
        return res.status(404).send({id : "There is no such post!"});
    } 

    Blog.findByIdAndDelete(id, (err, doc) => {

        if (err) return res.status(400).send({msg : "Unable to Delete!"})

        return res.status(200).send({msg :"Successfully Deleted", id : id})
    })
}

//Displays the blog blurbs on GET
exports.blog_blurbs = (req, res) => {
     //Should transform the request into enough info appropriate for a blurb
     let perPage = 10
     const page = Math.max(0, req.params.page)
    Blog.find()
    .select("title blog_text _id created")
    .sort({created : -1})//from most recent to least recent
    .limit(perPage)
    .skip(perPage * page)
    .then(blogs =>{  
        res.json(blogs)   
    })
    .catch(err => res.status(400).json({msg : "There are no posts " }))
   
}

//Displays the full Blog (Title, Body, and Author) on GET
exports.full_blog = (req, res) => {
   let id = req.params.id;
   console.log(id);
    
   if (!ObjectID.isValid(id)){
    return res.status(404).send({id : "This post is not working!"});
}

    Blog.findById(id, (err, doc) => {
        if(err) return res.status(404).send( {id :"There seems to be something wrong with this post"});
 
        return res.status(200).send({doc})

    })
    
}
//Displays the comments of the Blog on POST
exports.blog_comments_POST = (req, res) => {
    console.log("Comment Creation endpoint has been hit");
    let id = req.params.id
   
    let newComment = new Comment({
        blog: id,
        user: req.body.name,
        body: req.body.body,
    })

    newComment.save((err,doc) => {
        if(err) return console.log(err);
        
        else{
            console.log(doc)   
            return res.status(200).send(doc);
        }
    })

}


//Displays the comments of the Blog on GET
exports.blog_comments_GET = (req, res) => {
    let id = req.params.id;

    
    Comment.find()
    .select('user body blog')
    .populate('blog')
    .populate('user')
    .then(comments =>{
        comments.forEach(comment =>{
        if(!ObjectID.isValid(id) || id !== Comment.blog.id ){
            return res.status(400).send({msg:"This comment does not go with this post!"})
        }

        return res.status(200).send({comment});
    });
    }).catch(err => res.status(400).Json({msg:" Unable to fetch the comments"}));

}


function truncatedBlog(text, length){
    if (text <= length){
        return text
    }

    return text.substring(0, length-1)+ "(see more)"
}