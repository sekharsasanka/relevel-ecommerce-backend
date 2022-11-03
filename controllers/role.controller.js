const roleService = require('../services/roleService');

const addRoleToUser = async (req, res) => {
    const response = await roleService.addRoleToUser(req.body.userEmail, req.body.roleName);
    if(response){
        return res.json({
            message: 'Role is added successfully',
            success: true,
            statusCode: 200,
            data: response
        });
    }
    else{
        return res.json({
            message: 'Internal server error',
            success: true,
            code: 500,
        });
    }
}

const removeRoleFromUser = async (req, res) => {
    const response = await roleService.removeRoleFromUser(req.body.userEmail, req.body.roleName);
    if (response) {
        return res.json({
            message: 'Role is removed successfully',
            success: true,
            statusCode: 200,
            data: response
        });
    } else {
        return res.json({
            message: 'Internal server error',
            success: true,
            code: 500,
        });
    }
    
}
module.exports = {
    addRoleToUser,
    removeRoleFromUser
}