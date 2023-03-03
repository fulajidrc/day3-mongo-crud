const { Post } = require('../models')
const controller = {}

controller.create = async(req, res) => {
    try{
        const {title, description, user, category} = req.body;
        const postData = {title, description, user, category};
        const post = await Post.create(postData);
        return post 
        ? res.status(201).json({message: 'Post added successfully!', data: post})
        : res.status(400).json({message: 'Post not added!'})
    }catch(error){
        return res.status(500).json({message: 'Server Error'});
    }
}

controller.getAll = async (req, res) => { 
    try{
        const posts = await Post.find().populate('category').populate('user')
        return res.status(200).json({message: 'Post list', data: posts})
    }catch(error){
        return res.status(500).json({message: 'Server Error'});
    }
}

controller.update = async(req, res) => {
    try{
        const { title, description, user, category } = req.body;
        const { id } = req.params;
        const postData = {title, description, user, category}
        const post = await Post.findByIdAndUpdate(id, postData);
        return post 
        ? res.status(200).json({message: 'Post updated successfully!', data: post})
        : res.status(400).json({message: 'Post not updated!'})
    }catch(error){
        return res.status(500).json({message: 'Server Error'});
    }
}


controller.getOne = async(req, res) => {
    try{
        const { id } = req.params;
        const post = await Post.findById(id).populate('user').populate('category');
        return post 
        ? res.status(200).json({message: 'Post detail', data: post})
        : res.status(400).json({message: 'Post not found'})
    }catch(error){
        return res.status(500).json({message: 'Server Error'});
    }
}

controller.delete = async(req, res) => {
    try{
        const { id } = req.params
        const post = await Post.findByIdAndDelete(id);
        return post 
        ? res.status(200).json({message: 'Post deleted successfully!'})
        : res.status(400).json({message: 'Post not deleted!'})
    }catch(error){
        return res.status(500).json({message: 'Server Error'});
    }
}
 
module.exports = controller;