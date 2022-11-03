const authController = require('../controllers/auth.controller');

const routes = (app) => {
    /*route for signup*/ 
    app.post('/ecomm/api/v1/signup', authController.signup)
    
    /*route for signin*/
    app.post('/ecomm/api/v1/signin', authController.signin)
    
}




module.exports = routes;