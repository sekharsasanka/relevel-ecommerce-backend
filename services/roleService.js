const { Role } = require('../models/index');
const authHelperService = require('../services/auth-helper-service');
const addRoleToUser = async (userEmail, roleName) => {
    try {
        const user = await authHelperService.getUserByEmail(userEmail);
        // console.log("=======",user);
        
        const role = await getRoleByName(roleName)
        // console.log("=======",role);
        
        await user.addRole(role);
        return user;
    } catch (err) {
        console.error(err);
    }    
}

const removeRoleFromUser = async(userEmail,roleName) => {
    try {
        const user = await authHelperService.getUserByEmail(userEmail);

        const role = await getRoleByName(roleName)

        user.removeRole(role);
        return user;
    } catch (err) {
        console.error(err);
    }   
}

const getRoleByName = async (roleName) => {
    try {
        const response = await Role.findOne({
            where: {
                name: roleName
            }
        });
        return response;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    addRoleToUser,
    removeRoleFromUser,
    getRoleByName
}




// const getRoleById = async (roleId) => {
//     try {
//         const response = await Role.findByPk(roleId);
//         return response;
//     } catch (err) {
//         console.error(err);
//     }    
// }