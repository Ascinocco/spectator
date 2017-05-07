var Deployment = require('../models/deployment');

var SpectatorController = (function(){

    var index = function (req, res, next) {
        res.render('app', {
            title: 'Spectator',
            loadBundle: true // needed for loading the vue js app
        });
    }

    var initialize = function (req, res, next) {
        // return data needed for spa
    }

    return {
        index: index,
        initialize: initialize
    }

})();

module.exports = SpectatorController;