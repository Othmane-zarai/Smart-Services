const responseController =  require('../controllers/responseController');
module.exports = function(app){
    app.post(
        "/response",
        responseController.create
    );
    app.put(
        "/response/:id",
        responseController.update
    );
    app.delete(
        "/response/:id",
        responseController.delete
    );
}