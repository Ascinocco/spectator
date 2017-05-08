var express = require('express');
var passport = require('passport');
var router = express.Router();
var UserController = require('../controllers/UserController');
var AuthMiddleware = require('../middleware/AuthMiddleware');

router.use(AuthMiddleware.handle);

router.get('/', SpectatorController.index);

module.exports = router;