var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var config = require('./config/database');
const db = require('./models');
const cors = require('cors');
//init app
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // For legacy browser support
}
//adding primary session
app.use(cors(corsOptions));
app.use(session({
  secret:'keyboard cat',
  resave:true,
  saveUnitialized:true,
  cookie:{secure: true}
}))
//adding public folders
mongoose.connect(config.database,{useNewUrlParser:true , useUnifiedTopology: true});
mongoose.connection.once('open', function(){
  console.log("Database working fine");
})
require('./routes/auth.routes')(app);
require('./routes/request.routes')(app);
require('./routes/response.routes')(app);
require('./routes/claim.routes')(app);
require('./routes/qrcode.routes')(app);
var port = 3000;
app.listen(port, function(){
  console.info("Server Started on");
})
