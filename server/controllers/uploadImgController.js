const User = require('../models/User');
const Request = require('../models/Request');
exports.createAssistantImg = function(req,res){
    if(!req.body.file){
        return res.status(500).send({message:'Upload fail'});
    }
    else{
        User.findOne({username:req.body.username,role:"assistant"})
            .then(function(assistant){
                assistant.imageUrl='http://localhost:3000/AssistantImg'+req.body.file.filename;
                assistant.save()
                    .then(function(updAssistant){
                        return res.status(200).json({
                            status:200,
                            message:'Url Added'
                        });
                    })
                    .catch(function(err){
                        return res.status(400).json({
                            status:400,
                            message:err.message
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
}
exports.createRequestImg = function(req,res){
    if(!req.body.file){
        return res.status(500).send({message:'Upload fail'});
    }
    else{
        Request.findOne({username:req.body.username,status:"not done"})
            .then(function(request){
                request.imgUrl='http://localhost:3000/DemandeImg'+req.body.file.filename;;
                request.save()
                    .then(function(updRequest){
                        return res.status(200).json({
                            status:200,
                            message:'Url Added'
                        });
                    })
                    .catch(function(err){
                        return res.status(400).json({
                            status:400,
                            message:err.message
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
}