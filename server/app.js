var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var config = require('./config/database');
const db = require('./models');
//init app
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//adding primary session
app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUnitialized:true,
  cookie:{secure: true}
}))
//adding public folders
mongoose.connect(config.database,{useNewUrlParser:true , useUnifiedTopology: true});
mongoose.connection.once('open', function(){
  console.log("Database working fine");
})
require('./routes/auth.routes')(app);
var port = 3000;
app.listen(port, function(){
  console.info("Server Started on");
})
