const Claim = require('../models/Claim');
exports.create = function(req, res){
    const claim = new Claim({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    });
    claim.save()
        .then(function(createdClaim){
            return res.status(200).json({
                status:200,
                data:createdClaim,
                message:'claim created succesfully'
            });
        })
        .catch(function(err){
            return res.status(400).json({
                status:400,
                message:err.message
            });
        });
}
