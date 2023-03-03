const { User } = require('../models') 
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const controller = {}

controller.login = async (req, res) => { 
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(user){
            const checkPassword = await bcrypt.compare(password, user.password);
            if(checkPassword){
                const token = jwt.sign({ name: user.name, email: user.email, id:user._id }, process.env.JWT_KEY);

                res.cookie('loginToken', token);
                return res.status(200).json({message: 'User login ', data: user})
            }else{
                return res.status(400).json({message: 'Please enter valid email or password!'})
            }
        }else{
            return res.status(400).json({message: 'Please enter valid email or password!'})
        }
    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: 'Server Error!'})
    }
}

controller.verify = async (req, res) => {
    res.json({message: 'OK'})
}

controller.logout = async (req, res) => {
    res.clearCookie("loginToken");
    res.json({message: 'Logout successfully!'})
}

module.exports = controller;