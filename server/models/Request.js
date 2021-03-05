const mongoose = require('mongoose');
const RequestSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    serviceType:{
        type:String,
        required:true
    },
    lat:{
        type:Number,
        required:false
    },
    lng:{
        type:Number,
        required:false
    },
    address:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    code:{
        type:mongoose.Mixed,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    assistant:{
        type:String,
        required:false
    },
    status:{
        type:String,
        default:"not done"
    },
    price:{
        type:Number,
        required:false
    }
});
const Request = mongoose.model('Request',RequestSchema);
module.exports = Request;