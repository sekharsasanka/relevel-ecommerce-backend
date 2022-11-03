const validateCreate = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({
            message: 'Category name is missing, please try again by adding a category name',
            success: false,
            err: 'name parameter is missing in the request body',
            data: {}
        })

        /*or we write it like as return res.status(400).send('You have missed the name field')*/ 
    }
  next();
}

module.exports = {
    validateCreate
}    