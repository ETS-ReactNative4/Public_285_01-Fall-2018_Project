const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Blog_Controller = require('../controllers/blogController');
   
 router.get('',Blog_Controller.blog_blurbs)
 router.get('/create', Blog_Controller.blog_create_get),  
 router.post('/create', Blog_Controller.blog_create_post),
 router.patch('/:id',Blog_Controller.blog_update_patch),

module.exports = router;