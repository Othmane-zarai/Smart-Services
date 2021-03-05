const adminController = require('../controllers/adminController');
module.exports = function(app){
    app.post(
        "/admin/assistants",
        adminController.getAssistantByService
    );
    app.get(
        "/admin/requests",
        adminController.getRequests
    );
    app.get(
        "/admin/candidatures",
        adminController.getCandidatures
    );
    app.get(
        "/admin/claims",
        adminController.getClaims
    );
}