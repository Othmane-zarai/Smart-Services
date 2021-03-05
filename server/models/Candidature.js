const mongoose = require('mongoose');
const CandidatureSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    serviceType:{
        type:String,
        required:true
    },
    motivation:{
        type:String,
        required:false
    },
    accepted:{
        type:Boolean,
        required:true,
        default:false
    }
});
const Candidature = mongoose.model('Candidature',CandidatureSchema);
module.exports = Candidature;