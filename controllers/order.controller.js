const orderService = require('../services/orderService');
const { STATUS } = require('../config/order.constants');

const addProduct = async (req, res) => {
     //get urser's order which is in creation status
    let order = await orderService.getOrderByUser(req.user, STATUS.CREATION);
    console.log('===== 1', order);
    
    if (!order) {//if no existing order in creation status, then create a new order
        order = await orderService.createOrder(req.user);
        console.log('===== 2', order);
    }

    let response = await orderService.addProductToOrder(order.id,req.body.productId)
    console.log('====== 3', response);
    if(response.error){
        return res.json({
            status: 400,
            success: true,
            message: response.error
        });
    }

    if (response) {
        return res.json({
            message: 'Successfully added product to order',
            statusCode: 200,
            success: true
        })
    }

}

let removeProduct = async(req,res) => {
    let order = await orderService.getOrderByUser(req.user, STATUS.CREATION);
    console.log('===== 1', order);
    if (!order) {
        return res.json({
            message: 'No Product in order',
            statusCode: 400,
            success:true
        })
    }

    const response = await orderService.removeProductFromOrder(req.body.productId, order.id);
    console.log('==== 2', response);
    if (!response) {
        return res.json({
            message: 'Internal Server Error',
            statusCode: 500,
            success:true
        })
    }
    if(response.error){
        return res.json({
            status: 400,
            success: true,
            message: response.error
        });
    }
    return res.json({
        statusCode: 200,
        message: 'Product removed from order successfully',
        success:true
    })
}



module.exports = {
    addProduct,
    removeProduct
}