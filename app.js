var User=require('./model/user');
var express = require('express')
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
require('./routes')(app);
var port=3000||process.env.PORT;




app.listen(port,function () {
    console.log(port);
    
});