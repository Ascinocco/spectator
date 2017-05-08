var AuthMiddleware = (function(){
    var handle = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/');
    }

    var redirectToApp = function (req, res, next) {
       if (req.user) {
           res.redirect('/app');
       }

       return next();
    }

    return {
        handle: handle,
        redirectToApp: redirectToApp
    }
})();

module.exports = AuthMiddleware;