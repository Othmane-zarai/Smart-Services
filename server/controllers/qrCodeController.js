const Request = require('../models/Request');
exports.checkCode = function(req,res){
    const query = Request.findOne({username:req.body.username});
    query.exec(function(err,request){
        if(err){ return res.status(400).json({
            status:400,
            message:err.message
        })}
        if(request){
            console.log(request.code);
            if(req.body.code===request.code[0]){
                return res.status(200).json({
                    status:200,
                    data:request.code
                });
            }
            else{
                return res.status(400).json({
                    status:400,
                    message:'Code erroné'
                });
            }
        }
    });
};
exports.generateCode = function(req,res){
    Request.findOne({username:req.body.username})
       .exec(function(err,request){
           if(err){
               return res.status(400).json({
                   status:400,
                   data:err.message
               });
           }
           if(request){
               return res.status(200).json({
                   status:200,
                   message:request.code[0]
               });
           }
       });
}