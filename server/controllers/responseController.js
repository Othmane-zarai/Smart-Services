const Response = require('../models/Response');
exports.create = function(req, res){
     const response = new Response({
         assitants: req.body.assitants,
         status: req.body.status,
         price:req.body.price
     });
     response.save()
         .then(function(createdResponse){
             return res.status(200).json({
                 status:200,
                 data:createdResponse,
                 message:'response created succesfully'
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
        .then(function (response) {
            response.assitants = req.body.assitants || response.assitants;
            response.status = req.body.status || response.status;            
            response.save()
               .then(function(updatedResponse){
                   return res.status(200).json({
                       status:200,
                       date:updatedResponse,
                       message:'Response updated'
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
       .then(function(response){
           request.remove()
              .then(function(deletedRequest){
                  return res.status(200).json({
                    status:200,
                    data:deletedRequest,
                    message:'Response deleted'
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