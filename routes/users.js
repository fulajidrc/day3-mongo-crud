var express = require('express');
var router = express.Router();
const { userController } = require('../controllers');
const { userRequest } = require('../requests')
router.post('/',userRequest, userController.create);
router.get('/', userController.getAll);
router.put('/:id', userRequest, userController.update);
router.get('/:id', userController.getOne);
router.delete('/:id', userController.delete);

module.exports = router;