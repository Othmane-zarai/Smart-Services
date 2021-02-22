const mongoose = require('mongoose');

const ResponseSchema = mongoose.Schema({
    assistants:{
        type:[mongoose.ObjectId ],
        required:true
    },
    status:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const Response = mongoose.model('Response',ResponseSchema);
module.exports = Response;