const categoryService = require('../../services/CategoryService');
const { Category } = require('../../models/index');

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

test('when getAllCategories is called, all categories should be returned', async () => {
    const spy = jest.spyOn(Category, 'findAll').mockReturnValue(allCategoriesResponse);

    const result = await categoryService.getAllCategories();

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(allCategoriesResponse);
});

test('when createNewCategory is called, new category should be returned', async () => {
    const spy = jest.spyOn(Category, 'create').mockReturnValue(categoryPayload);
    const result = await categoryService.createNewCategory(categoryPayload);
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(categoryPayload);
});

test('when getCategoryById is called, a category should be returned', async () => {
    const spy = jest.spyOn(Category, 'findAll').mockReturnValue(allCategoriesResponse);
    const result = await categoryService.getCategoryById(1);
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(allCategoriesResponse);
});

test('when getCategoryByName is called, a category should be returned', async () => {
    const spy = jest.spyOn(Category, 'findAll').mockReturnValue(allCategoriesResponse);
    const result = await categoryService.getCategoryByName("Electronics");
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(allCategoriesResponse);
});

test('when updateCategory is called, a category should be updated', async () => {
    const spy = jest.spyOn(Category, 'update').mockReturnValue(categoryPayload);
    const result = await categoryService.updateCategory(1, categoryPayload);

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(categoryPayload);
});

test('when deleteCategory is called, the category should be deleted', async() => {
    const spy = jest.spyOn(Category, 'destroy').mockReturnValue(categoryPayload);
    const result = await categoryService.deleteCategory(1);

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(categoryPayload)

})