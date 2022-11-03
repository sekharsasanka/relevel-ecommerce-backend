const orderController = require('../controllers/order.controller');
const authenticationMiddleware = require('../middlewares/authentication.validatords');
const routes = (app) => {
    
    /*to add products to order*/
    app.post('/ecomm/api/v1/addProduct', authenticationMiddleware.isAuthenticated, orderController.addProduct);
    
    /*to remove products from order*/
    app.patch('/ecomm/api/v1/removeProduct', authenticationMiddleware.isAuthenticated, orderController.removeProduct);

}

module.exports = routes;