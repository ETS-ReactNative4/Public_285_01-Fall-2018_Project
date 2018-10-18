const express = require('express');
const bodyParser = require('body-parser');
const queryString = require('querystring');
const app = express()

let port = process.env.port || 3001



app.listen(port, (req,res) => console.log("We are live on port " + port))