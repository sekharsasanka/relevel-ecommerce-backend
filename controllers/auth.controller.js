const authservice = require('../services/AuthService');
const authHelperService = require('../services/auth-helper-service');
const jwt = require('jsonwebtoken');
// require('dotenv').config();

const signup = async (req, res) => {
    
    const response = await authservice.signup(req.body);
    
    return res.status(200).json({
        msg: 'You have successfully created your account',
        data:response
    });
}

const signin = async (req,res) => {
    
    const userData = await authHelperService.getUserByEmail(req.body.email);
    // console.log('======', userData);
    
    if (!userData) {
        
        return res.status(400).json({
            msg: 'Email id is incorrect, please try again',
            data: null,
        })
    } else {
        const passwordVerified = await authservice.verifypassword(req.body.password, userData.password);
        // console.log('======', passwordVerified);
        
        if (passwordVerified) {
            let token = jwt.sign({email:userData.email,password:userData.password,username:userData.username},process.env.JWT_secret_key)
            // console.log('======', token);

            return res.status(200).json({
                message: 'Signed in successfully',
                token: token
            })
        } else {
            
            return res.status(400).json({
                message: 'Password is incorrect',
                data:null
            })
        }
    }
}


module.exports = {
    signup,
    signin,
 
}