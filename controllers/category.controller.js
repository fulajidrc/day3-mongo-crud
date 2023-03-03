const { Category } = require('../models')

const controller = {}

controller.create = async (req, res) => {
    try{
        const { title, description } = req.body;
        const categoryData = {title, description};
        const category = await Category.create(categoryData);
        return category 
        ? res.status(200).json({message: 'Category added successfully!', data: category})
        : res.status(400).json({message: 'Category not added '})
    }catch(error){
        return res.status(500).json({message: 'Server error'});
    }
}

controller.getAll = async (req, res) => {
    try{
        const categories = await Category.find().populate({path: 'posts', populate:{
            path: 'user'
        }});
        return res.status(200).json({message: 'Category list', data: categories})
    }catch(error){
        return res.status(500).json({message: 'Server error'});
    }
}

controller.update = async (req, res) => {
    try{
        const { title, description } = req.body;
        const {id} = req.params;
        const categoryData = {title, description};
        const category = await Category.findOneAndUpdate(id, categoryData);
        return category 
        ? res.status(200).json({message: 'Category updated successfully!', data: category})
        : res.status(400).json({message: 'Category not updated'})
    }catch(error){
        return res.status(500).json({message: 'Server error'});
    }
}

controller.getOne = async (req, res) => {
    try{
        const { id } = req.params;
        const category =await Category.findById(id);
        return category 
        ? res.status(200).json({message: 'category data!', data: category})
        : res.status(400).json({message: 'category not found!'})
    }catch(error){
        return res.status(500).json({message: 'Server error'});
    }
}

controller.delete = async(req, res) => {
    try{
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        return category 
        ? res.status(200).json({message: 'Category deleted successfully!'})
        : res.status(400).json({message: 'Category not deleted!'})
    }catch(error){
        return res.status(500).json({message: 'Server error'});
    }
}

module.exports = controller;