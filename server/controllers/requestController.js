const Request = require('../models/Request');
const generateRandomCode = require('../QRCode/CodeGeneration');
exports.create = function(req, res){
     const request = new Request({
         username:req.body.username,
         serviceType: req.body.serviceType,
         lat: req.body.lat,
         lng: req.body.lng,
         address:req.body.address,
         description: req.body.description,
         code:generateRandomCode,
         status:"not done"
     });
     request.save()
         .then(function(createdRequest){
             return res.status(200).json({
                 status:200,
                 data:createdRequest,
                 message:'request created succesfully'
             });
         })
         .catch(function(err){
             return res.status(400).json({
                 status:400,
                 message: err.message
             });
         });
}
exports.update = function(req, res){
    Request.findById(req.params.id)
        .then(function (request) {
            request.serviceType = req.body.serviceType || request.serviceType;
            request.lat = req.body.lat || request.lat;
            request.lng = req.body.lng || request.lng;
            request.description = req.body.description || request.description;
            request.code = generateRandomCode;
            request.save()
               .then(function(updatedRequest){
                   return res.status(200).json({
                       status:200,
                       date:updatedRequest,
                       message:'Request updated'
                   });
               })
               .catch(function(err){
                   return res.status(400).json({
                       status:400,
                       message: err.message
                   });
               });
        });
}
exports.delete = function(req, res){
    Request.findById(req.params.id)
       .then(function(request){
           request.remove()
              .then(function(deletedRequest){
                  return res.status(200).json({
                    status:200,
                    data:deletedRequest,
                    message:'Request deleted'
                });
               })
              .catch(function(err){
                  return res.status(400).json({
                      status:400,
                       message: err.message
                });
               });
       })
       .catch(function(err){
           return res.status(400).json({
               status:400,
               message:err.message
           });
       });
}