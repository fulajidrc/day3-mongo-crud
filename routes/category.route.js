var express = require('express');
var router = express.Router();
const { categoryController } = require('../controllers');
const { categoryRequest } = require('../requests')

router.post('/',categoryRequest, categoryController.create);
router.get('/', categoryController.getAll);
router.put('/:id', categoryRequest, categoryController.update);
router.get('/:id', categoryController.getOne);
router.delete('/:id', categoryController.delete);

module.exports = router;