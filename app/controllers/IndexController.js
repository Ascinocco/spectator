var IndexController = (function(){

    var index = function(req, res, next) {
        res.render('index/landing', {
            title: 'Spectator',
         });
    }

    var login = function (req, res, next) {
        res.render('index/login', {
            title: 'Login',
            message: req.flash('message')
        });
    }

    var register = function (req, res, next) {
        res.render('index/register', {
            title: 'Register',
            message: req.flash('message')
        });
    }

    var logout = function (req, res, next) {
        req.logout();
        res.redirect('/');
    }

    return {
        index: index,
        login: login,
        register: register,
        logout: logout
    }

})();

module.exports = IndexController;