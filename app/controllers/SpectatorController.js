var User = require('../models/user');
var Deployment = require('../models/deployment');

var SpectatorController = (function(){

    var index = function (req, res, next) {
        res.render('app', {
            title: 'Spectator',
            loadBundle: true // needed for loading the vue js app
        });
    }

    var initialize = function (req, res, next) {
        var user = req.user;
        Deployment.find({})
    }

    // save new deployment
    var store = function (req, res, next) {
        var data = req.body;
        var user = req.user;

        var newDep = Deployment.createDemployment(data, user, function (err, newDep) {
            newDep.save(function (err, dep) {
                if (err) {
                    console.error(err);
                    return res.json({
                        success: false,
                        message: 'Could not save your deployment'
                    });
                }

                return res.json({
                    success: true,
                    message: 'Saved your deployment!',
                    deployment: dep
                });
            });
        });
    }

    var update = function (req, res, next) {

    }

    return {
        index: index,
        initialize: initialize,
        store: store,
        update: update
    }

})();

module.exports = SpectatorController;