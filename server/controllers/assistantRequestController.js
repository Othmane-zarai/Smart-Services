const Request = require('../models/Request');
const User = require('../models/User');
exports.getRequest = function(req,res){
    Request.find({serviceType:req.body.serviceType,status:"not done"})
       .then(function(request){
           return res.status.json({
               request
           });
       })
       .catch(function(err){
           return res.status(400).json({
               status:400,
               message:err.message
           })
       })
}
exports.validateRequest = function(req,res){
    const request = Request.findById(req.body.id);
    request.status="done";
    request.save();
}
exports.getInformations = function(req,res){
    User.findOne({username:req.body.username,role:"assistant"})
      .then(function(assistant){
          return res.status(200).json({
              assistant
          });
      })
      .catch(function(err){
          return res.status(400).json({
              status:400,
              message:err.message
          });
      })
}
exports.getRequests = function(req,res){
    Request.find({assistant:req.body.assistant,status:"done"})
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
      })
}