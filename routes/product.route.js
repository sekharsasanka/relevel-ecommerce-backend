const productController = require('../controllers/product.controller');
const authenticationMiddleware = require('../middlewares/authentication.validatords');
const routes = (app) => {
    /*to get all products*/
    app.get('/ecomm/api/v1/products', productController.getProducts);

    /*to get all products with Categories*/
    app.get('/ecomm/api/v1/productsWithCategories', productController.getProductsWithCategories);
    
    
    /*to create new product*/
    app.post('/ecomm/api/v1/products',authenticationMiddleware.isAuthenticated,authenticationMiddleware.checkAdminOrSeller ,productController.createProduct);


    /*to update the product*/
    app.put('/ecomm/api/v1/products/:productId',authenticationMiddleware.isAuthenticated,authenticationMiddleware.checkAdminOrSeller , productController.updateProduct);

    /*to delete a product*/
    app.delete('/ecomm/api/v1/products/:productId',authenticationMiddleware.isAuthenticated,authenticationMiddleware.checkAdminOrSeller , productController.deleteProduct);

    /* to get all products by a categoryId */
    app.get('/ecomm/api/v1/products/:categoryId', productController.getProductsByCategoryId);

    /* to get all products by a priceRange*/
    app.get('/ecomm/api/v1/productsByPriceRange', productController.getProductByPriceRange);

}

module.exports = routes