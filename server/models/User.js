const mongoose = require('mongoose');
const User = mongoose.model("User",mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:false
  },
  lastName:{
    type:String,
    required:false
  }
}));
module.exports = User;

