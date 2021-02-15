const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
    serviceType:{
        type:String,
        required:true
    },
    lat:{
        type:Number,
        required:true
    },
    lng:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
const Request = mongoose.model('Request',RequestSchema);
module.exports = Request;