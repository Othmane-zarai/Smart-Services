const assistantRequestController = require('../controllers/assistantRequestController');
module.exports = function(app){
    app.post(
        "/assistant/request",
        assistantRequestController.getRequest
    );
    app.post(
        "/assistant/infos",
        assistantRequestController.getInformations
    );
    app.post(
        "/assistant/requests",
        assistantRequestController.getRequests
    );
}