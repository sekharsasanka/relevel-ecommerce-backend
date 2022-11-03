const categoryController = require('../controllers/category.controller');
const categoryMiddleware = require('../middlewares/category.validators');
const authenticationMiddleware = require('../middlewares/authentication.validatords');

const routes = (app) => {
    /* to get all categories */
    app.get('/ecomm/api/v1/categories', categoryController.getCategories);
    
    /* to create a new category*/
    app.post('/ecomm/api/v1/categories',authenticationMiddleware.isAuthenticated,authenticationMiddleware.checkAdmin,categoryMiddleware.validateCreate, categoryController.createCategory);

    /*to fetch a category by id */
    app.get('/ecomm/api/v1/categories/:id', categoryController.getCategoryById)
    
    /*to fetch a category by name*/
    app.get('/ecomm/api/v1/categoriesByName/', categoryController.getCategoryByName)
    
    /*to update a category by name*/
    app.put('/ecomm/api/v1/categories/:id',authenticationMiddleware.isAuthenticated ,authenticationMiddleware.checkAdmin,categoryController.updateCategory)
    
    /* to delete a category by id*/
    app.delete('/ecomm/api/v1/categories/:id',authenticationMiddleware.isAuthenticated,authenticationMiddleware.checkAdmin,categoryController.deleteCategory)
}

module.exports = routes;