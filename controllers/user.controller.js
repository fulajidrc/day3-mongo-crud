const controller = {}
const {User} = require('../models');
const bcrypt = require('bcrypt');

controller.create = async(req, res) => {
    try{
        const { name, email, password } = req.body;

        const checkEmail = await User.findOne({email: email})
        if(checkEmail){
            return res.status(400).json({message: 'Email already exits!'})
        }
        const hash = await bcrypt.hash(password, parseInt(process.env.SOLT));
        const userData = {name, email, password: hash}
        const user = await User.create(userData);
        return user 
        ? res.status(201).json({message: 'user added successfully!', data: user})
        : res.status(400).json({message: 'User not added!'});
    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: 'Server Error!'});
    }
}

controller.getAll = async(req, res) => {
    try{
        const users = await User.find({}).populate({path: 'posts',  populate : {
            path : 'category'
          }});
        return users 
        ? res.status(200).json({message: 'User list', data: users})
        : res.status(400).json({message: 'User not found!'});
    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: 'Server Error!'});
    }
}


controller.update = async(req, res) => {
    try{
        const { name, email, password } = req.body;
        const { id } = req.params;
        const updateData = {
            name, email, password
        }
        const user = await User.findOneAndUpdate(id, updateData)
        return user
        ? res.status(200).json({message: 'User updated successfully'})
        : res.status(400).json({message: 'User not updated!'})
    }catch(error){
        // console.log(error.message);
        return res.status(500).json({message: 'Server Error!'});
    }
}

controller.getOne = async (req, res) => {
    try{
        const { id } = req.params
        const user = await User.findById(id);
        return user
        ? res.status(200).json({message: 'user detail', data: user})
        : res.status(400).json({message: 'User not found!'})
    }catch(error){
        return res.status(500).json({message: 'Server Error!'});
    }
}

controller.delete = async(req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        return user
        ? res.status(200).json({message: 'user deleted successfully!'})
        : res.status(400).json({message: 'User not deleted!'})
    }catch(error){
        return res.status(500).json({message: 'Server Error!'});
    }
}

module.exports = controller;