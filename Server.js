const express = require('express');
const bodyParser = require('body-parser');
const queryString = require('querystring');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const Blog = require('./Src/Models/Blog');
const blogRouter = require('./Src/Routes/blogRouter');
const productRouter = require('./Src/Routes/productRouter');
const mongoose = require('mongoose');

//configs
const app = express();




app.use(express.static('./'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/blogs', blogRouter);
app.use('/store', productRouter);

mongoose.connect('mongodb://localhost:27017/DocJosh', {useNewUrlParser: true}, (err) =>{
    if (err) console.log(err);
});
mongoose.connection.on("connected", () => {
    console.log("connected");
})



let port = process.env.port || 3001






app.listen(port, (req,res) => console.log("We are live on port " + port))