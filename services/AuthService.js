const { Role,User } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const roleService = require('../services/roleService');
require('dotenv').config();

const signup = async (data) => {
    const user = await User.create({
        username: data.username,
        password: data.password,
        email: data.email
    })
    // console.log("======",user)
    const customerRole = await Role.findOne({
        where: {
            name:'customer'
        }
    });
    // console.log("======",customerRole)

    //assign customer role by default to user
    await user.addRole(customerRole);
    

    // return user;
}

const verifypassword = async (password,hashedPassword) => {
    const response = await bcrypt.compare(password, hashedPassword);
    return response;
}

const verifyToken = (token) => {
    try {
        const response = jwt.verify(token, process.env.JWT_secret_key);
        return response;
    } catch (err) {
        console.error(err);
    }    
}

module.exports = {
    signup,
    verifypassword,
    verifyToken,
}



