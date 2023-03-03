const { validate } = require('../middleware')

const { body } = require('express-validator');
const userValidation = validate([
    body('email')
    .notEmpty().withMessage('Email is required!')
    .isEmail().withMessage('Please enter valid email!'),
    body('name')
    .notEmpty().withMessage('Name is required!'),
    body('password')
    .notEmpty().withMessage('Password is required!')
    .isLength({ min: 6 }).withMessage('Please enter valid password!')
]);

module.exports = userValidation;