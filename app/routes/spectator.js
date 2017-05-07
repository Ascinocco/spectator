var express = require('express');
var passport = require('passport');
var router = express.Router();
var SpectatorController = require('../controllers/SpectatorController');
var AuthMiddleware = require('../middleware/AuthMiddleware');

router.use(AuthMiddleware.handle);

router.get('/', SpectatorController.index);

module.exports = router;