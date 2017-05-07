var express = require('express');
var passport = require('passport');
var router = express.Router();
var IndexController = require('../controllers/IndexController');
var AuthMiddleware = require('../middleware/AuthMiddleware');

/* GET home page. */
router.get('/', IndexController.index);

router.get('/login', IndexController.login);
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/app',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/register', IndexController.register);
router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/app',
    failureRedirect: '/register',
    failureFlash: true
}));

router.get('/logout', AuthMiddleware.handle, IndexController.logout);

module.exports = router;
