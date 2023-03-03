var express = require('express');
var router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../middleware')
router.post('/login', authController.login);
router.get('/verify', auth ,authController.verify);
router.get('/logout', auth ,authController.logout);

module.exports = router;