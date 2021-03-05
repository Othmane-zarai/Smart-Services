const claimController = require('../controllers/claimController');
const adminController = require('../controllers/adminController');
module.exports = function(app){
    app.post(
        "/user/claim",
        claimController.create
    );
};