const qrCodeController = require('../controllers/qrCodeController');
module.exports = function(app){
    app.post(
        "/checkCode",
        qrCodeController.checkCode
    );
    app.post(
        "/generateCode",
        qrCodeController.generateCode
    );
}