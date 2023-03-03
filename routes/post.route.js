var express = require('express');
var router = express.Router();
const { postControlelr } = require('../controllers');
const { postRequest } = require('../requests')

router.post('/',postRequest, postControlelr.create);
router.get('/', postControlelr.getAll);
router.put('/:id',postRequest, postControlelr.update);
router.get('/:id', postControlelr.getOne);
router.delete('/:id', postControlelr.delete);

module.exports = router;