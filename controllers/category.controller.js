const categoryServices = require('../services/CategoryService');

const getCategories = async (req, res) => {
    const allCategoriesData = await categoryServices.getAllCategories();
    return res.json({
        message: 'Successfully fetched',
        statusCode:200,
        data: allCategoriesData
        
    })
}

const createCategory = async (req, res) => {
    // console.log('======'+req.body);
    const response = await categoryServices.createNewCategory(req.body);
    return res.json({
        message: 'Successfully created the category',
        statusCode: 201,
        data:response
    })
}

const getCategoryById = async (req, res) => {
    const response = await categoryServices.getCategoryById(req.params.id);
    return res.json({
        message: 'Successfully fetched the category by id',
        statusCode: 200,
        data:response
    })
}

const getCategoryByName = async (req, res) => {
    const response = await categoryServices.getCategoryByName(req.query.name);
    return res.json({
        message: 'Successfully fetched the category by name',
        statusCode: 200,
        data:response
    })
}

const updateCategory = async (req, res) => {
    const response = await categoryServices.updateCategory(req.params.id, req.body);
    return res.json({
        message: 'Successfully updated the category',
        statusCode: 201,
        data:response
    })
}

const deleteCategory = async (req, res) => {
    const response = await categoryServices.deleteCategory(req.params.id);
    return res.json({
        message: 'Successfully deleted the category',
        statusCode: 200,
        data:response
    })
}

module.exports = {
    getCategories,
    createCategory,
    getCategoryById,
    getCategoryByName,
    updateCategory,
    deleteCategory
}