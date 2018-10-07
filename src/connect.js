const mongoose =  require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const User = require('./Models/User');
const Blog = require('./Models/Blog');
const Product = require('./Models/Product');
const Podcast = require('./Models/Podcast');
   

    MONGO_URL = 'mongodb://Team_Meruca:285Rocks_@ds125293.mlab.com:25293/project_alpha';


    MongoClient.connect(MONGO_URL , function (err, db) {
  if (err) throw err;

  db.collection('Blogs').find().toArray(function (err, result) {
    if (err) throw err;

    console.log(result)
  })
});