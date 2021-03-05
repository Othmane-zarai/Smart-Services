const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
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
  role:{
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
  },
  telephone:{
    type:String,
    required:false
  },
  serviceType:{
    type:String,
    required:false
  },
});
const User = mongoose.model('User',UserSchema);
module.exports = User;


