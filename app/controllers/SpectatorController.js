var SpectatorController = (function(){

    var index = function (req, res, next) {
        res.render('app');
    }

    return {
        index: index
    }

})();

module.exports = SpectatorController;