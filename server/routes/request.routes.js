const requestController = require('../controllers/requestController');
const adminController = require('../controllers/adminController');
const affectAssistant = require('../services/affectAssistant');
module.exports = function(app){
    app.post(
        "/request",
        requestController.create
    );
    app.post(
        "/request/get",
        requestController.getRequest
    );
    app.put(
        "/request/:id",
        requestController.update
    );
    app.post(
        "/admin/requests",
        adminController.getRequests
    )
};