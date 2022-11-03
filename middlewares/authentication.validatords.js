const authServices = require('../services/AuthService')
const authHelperService = require('../services/auth-helper-service');
const roleService = require('../services/roleService')

const isAuthenticated = async (req, res, next) => {
    const token = req.headers['x-access-token']
    // console.log('====', token);
    
    if (!token) {
        return res.json({//when user is not sending any token in the request;
            message: 'JWT token is missing',
            data: null,
            err:'Invalid or missing argument in request header'
        })
    }
    
    const response = authServices.verifyToken(token);//user is sending a token in the request
    // console.log('=====', response);
    
    if (!response) {
        return res.json({
            message: 'Invalid JWT token',
            data: null,
            err:'Invalid auth details'
        })
    }

    const user = await authHelperService.getUserByEmail(response.email);
    // console.log('====',user);
    
    if (!user) {
        return res.json({
            message: "JWT token send for an invalid user",
            data: {},
            err: 'Invalid credentials'
        })
    }
    req.user = user;
    next();
}

const checkAdmin = async (req, res, next) => {
    const user = req.user;
    // console.log('=======',user);
    
    const adminRole = await roleService.getRoleByName('admin');
    // console.log('=====',adminRole);

    const isAdmin = await user.hasRole(adminRole);
    // console.log('=====',isAdmin)
    
    if (!isAdmin) {
        return res.json({
            message: 'User is not admin',
            statusCode: 401,
            data: {},
            err:'Not authorised'
        })
    }

    next();
}

const checkAdminOrSeller = async(req,res,next) => {
    const user = req.user;

    const adminRole = await roleService.getRoleByName('admin');
    const sellerRole = await roleService.getRoleByName('seller');
    
    const isAdmin = await user.hasRole(adminRole);
    const isSeller = await user.hasRole(sellerRole);
    
    if (!isAdmin && !isSeller) {
        
        return res.json({
            message: 'User is not admin',
            statusCode: 401,
            data: {},
            err:'Not authorised'
        })
    
    }       
    
    next();
}

module.exports = {
    isAuthenticated,
    checkAdmin,
    checkAdminOrSeller
}