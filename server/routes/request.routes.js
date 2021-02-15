const requestController = require('../controllers/requestController');
module.exports = function(app){
    app.post(
        "/request",
        requestController.create
    );
    app.put(
        "/request/:id",
        requestController.update
    );
    app.delete(
        "/request/:id",
        requestController.delete
    );
};