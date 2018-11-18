const Product = require('../Models/Product');
const mongoose = require('mongoose');



//Displays the product creation form with GET
exports.product_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Product create GET")
}

//Handles product create on POST
exports.product_create_post = (req, res) => {
    console.log("Product_Create_post has been hit!")
    let newProduct = new Product({
        title: req.body.title,
        imagePath: req.body.imagePath,
        description: req.body.description,
        price: req.body.price
    });
    
    newProduct.save((err,doc) => {
        if(err) return console.log(err);
        
        else{
            console.log(doc)   
            return res.status(200).send(doc);
        }
    },
    )}

//Displays the product update-form on this GET
exports.product_create_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Product update GET")
}

//Handles the product update on this POST
exports.product_create_update_post = (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['title','description','imagePath','Price'])

    console.log(body);

    if (!ObjectID.isValid(id)){
        return res.status(404).send({id : "There is no such product!"});
    } 

    Product.findByIdAndUpdate(id, {$set: body}, {new : true}).then((Product) =>{
        if(!Product){
            return res.status(404).send({msg : "Something went wrong. Please, try again later"});
        }
        res.send({Product});


    }).catch((e) => {
        res.status(400).send();
    })}

// Displays the Delete notification on GET
exports.product_create_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Product delete GET")
}

//Handles the deletion of a blog-post
exports.product_create_delete_post = (req, res) => {
    let id = req.params.id;
    console.log(id);

    if (!ObjectID.isValid(id)){
        return res.status(404).send({id : "There is no such product!"});
    } 

    Product.findByIdAndDelete(id, (err, doc) => {

        if (err) return res.status(400).send({msg : "Unable to Delete!"})

        return res.status(200).send({msg :"Successfully Deleted", id : id})
    })}

//Displays the product sample on GET
exports.product_samples = (req, res) => {
      //Should transform the request into enough info appropriate for a product sample
      Product.find()
      .select("imagePath title description _id price")
      .sort({title : ascending})//from products A - Z
      .limit(perPage)
      .skip(perPage * page)
      .then(products =>{  
          res.json(products)})
      .catch(err => res.status(400).json({msg : "There are no products " }));
}

//Displays the full product (name, description, price, seller) on GET
exports.full_product = (req, res) => {
    let id = req.params.id;
    console.log(id);
  
    if (!ObjectID.isValid(id)){
     return res.status(404).send({id : "This product is not working!"});
 }
 
     Product.findById(id, (err, doc) => {
 
         if(err) return res.status(404).send( {id :"There seems to be something wrong with this product"});
 
         return res.status(200).send({doc})
 
     })
}