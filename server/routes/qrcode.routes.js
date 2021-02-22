const qrCodeController = require('../controllers/qrCodeController');
module.exports = function(app){
    app.post(
        "/checkCode",
        qrCodeController.checkCode
    );
}