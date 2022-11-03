const productService = require('../services/ProductService');


const getProducts = async (req, res) => {
    const allProductsData = await productService.getAllProducts();
    return res.json({
        message: 'Successfully fetched all products',
        statusCode: 200,
        data:allProductsData
    })
}

const getProductsWithCategories = async (req, res) => {
    const allProductsDataWithCategories = await productService.getAllProductsWithCategories();
    return res.json({
        message: 'Successfully fetched all products with Categories',
        statusCode: 200,
        data:allProductsDataWithCategories
    })
}

const createProduct = async (req, res) => {
    const response = await productService.createProduct(req.body);
    return res.json({
        message: 'Successfully created the product',
        statusCode: 201,
        data: response
    })
}

const updateProduct = async (req, res)=>{
    const response = await productService.updateProduct(req.params.productId, req.body);
    return res.json({
        message: 'Successfully updated the product',
        statusCode: 201,
        data: response
    })
}

const deleteProduct = async (req, res) => {
    const response = await productService.deleteProduct(req.params.productId);
    return res.json({
        message: 'Successfully deleted the product',
        statusCode: 200,
        data:response
    })
}

const getProductsByCategoryId = async (req, res) => {
    const response=await productService.getProductsByCategoryId(req.params.categoryId);
    return res.json({
        message: 'Successfully fetched all the products',
        code: 200,
        data:response
    });
  
} 

const getProductByPriceRange = async (req, res) => {
    const response = await productService.getProductsByPriceRange(req.query);
    return res.json({
        message: 'Successfully fetched all the products',
        code: 200,
        data:response
    });
}
module.exports = {
    getProducts,
    getProductsWithCategories,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategoryId,
    getProductByPriceRange
}