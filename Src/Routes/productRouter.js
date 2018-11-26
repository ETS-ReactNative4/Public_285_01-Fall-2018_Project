const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() +
        path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
}).single('imagePath')

const Product_Controller = require('../controllers/productController');
 
router.get('/create',Product_Controller.product_create_get),  
router.post('/create',upload, Product_Controller.product_create_post),
router.get('/',Product_Controller.product_samples),
router.get('/:id', Product_Controller.full_product),
router.delete('/:id', Product_Controller.product_create_delete_post),
router.patch('/:page/:id',upload,Product_Controller.product_create_update_post),

module.exports = router;