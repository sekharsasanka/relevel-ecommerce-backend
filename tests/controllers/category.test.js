
const categoryController = require('../../controllers/category.controller');
const categoryService = require('../../services/categoryService');
const { mockRequest, mockResponse } = require('./mocker');
const allCategoriesResponse = [
    {
        id: 1,
        name: 'Electronics'
    },
    {
        id: 2,
        name: 'Groceries'
    },
];

const categoryPayload = {
    name: 'Fashion',
    description:'This is description for fashion'
}

test('when getCategories is called, it should return all the categories', async () => {
    const spy = jest.spyOn(categoryService, 'getAllCategories').mockReturnValue(allCategoriesResponse);
    const req = mockRequest();
    const res = mockResponse();
    const result = await categoryController.getCategories(req,res)
    expect(spy).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalledWith({
            message: 'Successfully fetched',
            statusCode:200,
            data: allCategoriesResponse
    });
})

test('when createCategory is called, it should return the category response', async () => {
    const spy = jest.spyOn(categoryService, 'createNewCategory').mockReturnValue(categoryPayload);
    const req = mockRequest();
    const res = mockResponse();
    const result = await categoryController.createCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalledWith({
        message: 'Successfully created the category',
        statusCode: 201,
        data: categoryPayload
    })
});

test('when getCategoryById is called, it should return the category response', async () => {
    const spy = jest.spyOn(categoryService, 'getCategoryById').mockReturnValue(categoryPayload);
    const req = mockRequest();
    const res = mockResponse();
    const result = await categoryController.getCategoryById(req, res);
    expect(spy).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalledWith({
        message: 'Successfully fetched the category by id',
        statusCode: 200,
        data:categoryPayload
    })
});


test('when getCategoryByName is called, it should return the category response', async () => {
    const spy = jest.spyOn(categoryService, 'getCategoryByName').mockReturnValue(categoryPayload);
    const req = mockRequest();
    const res = mockResponse();
    const result = await categoryController.getCategoryByName(req, res);
  

    expect(spy).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalledWith({
        message: 'Successfully fetched the category by name',
        statusCode: 200,
        data:categoryPayload
    })
});

test('when updateCategory is called, it should return the category response', async()=>{
    const spy = jest.spyOn(categoryService, 'updateCategory').mockReturnValue(categoryPayload);
    const req = mockRequest();
    const res = mockResponse();
    const result = await categoryController.updateCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalledWith({
        message: 'Successfully updated the category',
        statusCode: 201,
        data: categoryPayload
    });
}); 

test('when deleteCategory is called, it should return the category response', async()=>{
    const spy = jest.spyOn(categoryService, 'deleteCategory').mockReturnValue(categoryPayload);
    const req = mockRequest();
    const res = mockResponse();
    const result = await categoryController.deleteCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalledWith({
        message: 'Successfully deleted the category',
        statusCode: 200,
        data:categoryPayload
    });
}); 



       



