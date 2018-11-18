const express = require('express')
const router = express.Router()

const Blog_Controller = require('../controllers/blogController');
 
router.get('/create', Blog_Controller.blog_create_get),  
router.post('/create', Blog_Controller.blog_create_post),
router.get('/:page',Blog_Controller.blog_blurbs),
router.get('/:page/:id', Blog_Controller.full_blog),
router.delete('/:page/:id', Blog_Controller.blog_delete_post),
router.patch('/:page/:id',Blog_Controller.blog_update_patch),

module.exports = router;