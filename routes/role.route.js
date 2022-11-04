const roleController = require('../controllers/role.controller'); 
const authenticationMiddleware = require('../middlewares/authentication.validatords');

const routes = (app) => {

    /*route for adding roles*/
    app.post('/ecomm/api/v1/role', authenticationMiddleware.isAuthenticated,roleController.addRoleToUser);


    /*route for removing or deleteing roles*/
    app.delete('/ecomm/api/v1/role', authenticationMiddleware.isAuthenticated, authenticationMiddleware.checkAdmin,roleController.removeRoleFromUser);

}


module.exports = routes