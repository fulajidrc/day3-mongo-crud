const { validate } = require('../middleware')

const { body } = require('express-validator');
const categoryValidation = validate([
    body('title')
    .notEmpty().withMessage('Title is required!'),
    body('description')
    .notEmpty().withMessage('Description is required!')
]);

module.exports = categoryValidation;