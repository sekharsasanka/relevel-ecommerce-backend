const { Category,Product } = require('../models/index');
// const product = require('../models/product');
const { Op } = require("sequelize"); 

const getAllProducts = async () => {
    const allProductsData = await Product.findAll();
    return allProductsData;
}

const getAllProductsWithCategories = async () => {
    const response = await Product.findAll({ include: Category });
    return response;
}

const createProduct = async (data) => {
    const response = await Product.create({
        name: data.name,
        description: data.description,
        cost: data.cost,
        categoryId: data.categoryId
    })
    return response;
}

const updateProduct = async (productId, data) => {
    const response = await Product.update(
        {
            name: data.name,
            description: data.description,
            cost: data.cost,
            categoryId: data.categoryId
        },
        {
            where: {
                id: productId
            }
        }
    );
    return response;
}

const deleteProduct = async (productId) => {
    const response = await Product.destroy({
        where: {
            id: productId
        }
    });
    return response;
}

const getProductsByCategoryId = async (categoryId) => {
    const response = await Product.findAll({
        where: {
            categoryId: categoryId
        }
    });
    return response;
}

const getProductsByPriceRange = async (data) => {
    const response = await Product.findAll(
        {
            where: {
                cost: {
                    [Op.between]: [data.minCost, data.maxCost]
                }
            }
        }
    );

    return response;
}
module.exports = {
    getAllProducts,
    getAllProductsWithCategories,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategoryId,
    getProductsByPriceRange
}