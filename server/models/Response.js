const mongoose = require('mongoose');

const ResponseSchema = mongoose.Schema({
    assistants:{
        type:[mongoose.ObjectId ],
        required:true
    },
    status:{
        type:String,
        required:true
    }
})
const Response = mongoose.model('Response',ResponseSchema);
module.exports = Response;