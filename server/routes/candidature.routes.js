const candidatureController = require('../controllers/condidatureController');
module.exports = function(app){
    app.post(
        "/user/candidature",
        candidatureController.create
    );
}