const Candidature = require('../models/Candidature');
exports.create = function(req,res){
    const candidature = new Candidature({
        username:req.body.username,
        email:req.body.email,
        address:req.body.address,
        telephone:req.body.telephone,
        serviceType:req.body.serviceType,
        motivation:req.body.motivation
    })
    candidature.save()
       .then(function(candidature){
           return res.status(200).json({
               message:"Candidature added"
           });
       })
       .catch(function(err){
           return res.status(400).json({
               status:400,
               message:err.message
           });
       })
}