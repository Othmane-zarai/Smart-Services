const uploadImgController = require('../controllers/uploadImgController');
var uploadDemande = require('../ImgUpload/DemandeImg');
var uploadAssistant = require('../ImgUpload/AssistantImg');
module.exports = function(app){
    app.post(
        "/requestImg",
        uploadDemande.single('file'),
        uploadImgController.createRequestImg
    );
    app.post(
        "/assistantImg",
        uploadAssistant.single('file'),
        uploadImgController.createAssistantImg
    );
}