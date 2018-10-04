const express = require('express');
const bodyParser = require('body-parser');


//inits our express app on node.js
const app = express();

let port = 3000;

app.get('/',(request,response)=>{
    response.send("Hello world");
  });

app.listen(port, () => {
    console.log("Server is listening on "+port+". Fucking Finally!!!!!!!");

});