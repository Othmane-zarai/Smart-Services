const Request = require('../models/Request');
const User = require('../models/User');
const Candidature = require('../models/Candidature');
const Claim = require('../models/Claim');
exports.getAssistantByService = function(req,res){
    User.find({role:"assistant",serviceType:req.body.serviceType})
       .then(function(assistants){
           return res.status(200).json({
               assistants
           });
       })
       .catch(function(err){
           return res.status(400).json({
               status:400,
               message:err.message
           });
       });
}
exports.getRequests = function(req,res){
    Request.find()
        .then(function(requests){
          return res.status(200).json({
              requests
          });
        })
        .catch(function(err){
          return res.status(400).json({
              status:400,
              message:err.message
          });
        });
}
exports.getCandidatures = function(req,res){
    Candidature.find({accepted:false})
      .then(function(candidatures){
          return res.status(200).json({
              candidatures
          });
      })
      .catch(function(err){
          return res.status(400).json({
              status:400,
              message:err.message
          });
      })
}
exports.getClaims = function(req,res){
    Claim.find()
      .then(function(claims){
          return res.status(200).json({
              claims
          });
      })
      .catch(function(err){
          return res.status(400).json({
              status:400,
              message:err.message
          });
      })
}