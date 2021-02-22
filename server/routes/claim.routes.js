const claimController = require('../controllers/claimController');
module.exports = function(app){
    app.post(
        "/claim",
        claimController.create
    );
};