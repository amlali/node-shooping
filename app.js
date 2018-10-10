var User=require('./model/user');
var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
var access  = require('./controllers/access');
//app.use(access.access);
require('./routes')(app);
var port=3000||process.env.PORT;




app.listen(port,function () {
    console.log(port);
    
});