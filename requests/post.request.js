const { validate } = require('../middleware')

const { body } = require('express-validator');
const postValidation = validate([
    body('title')
    .notEmpty().withMessage('Title is required!'),
    body('description')
    .notEmpty().withMessage('Description is required!'),
    body('user')
    .notEmpty().withMessage('User is required!'),
    body('category')
    .notEmpty().withMessage('Category is required!')
    
]);

module.exports = postValidation;