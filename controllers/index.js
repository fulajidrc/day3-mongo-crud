const userController = require('./user.controller');
const categoryController = require('./category.controller')
const postControlelr = require('./post.controller')
const authController = require('./auth.controller')
const controller = {}

controller.userController = userController
controller.categoryController = categoryController;
controller.postControlelr = postControlelr;
controller.authController = authController;

module.exports = controller;