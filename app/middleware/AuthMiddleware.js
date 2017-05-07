var AuthMiddleware = (function(){
    var handle = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/');
    }

    return {
        handle: handle
    }
})();

module.exports = AuthMiddleware;