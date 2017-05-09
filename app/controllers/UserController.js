var User = require('../models/user');

var UserController = (function(){

    var index = function (req, res, next) {
        return res.json({
            user: {
                name: req.user.name,
                email: req.user.email
            }
        });
    }

    var update = function (req, res, next) {
        var user = {
            name: req.user.name,
            email: req.user.email
        };

        if (req.body.name) {
            user.name = req.body.name;
        }

        if (req.body.email) {
            user.email = req.body.email
        }

        var query = { email: req.user.email };
        var update = { $set: user };

        User.findOneAndUpdate(query, update, { new: true }, function (err, user) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Update Failed.'
                });
            }

            var user = {
                name: user.name,
                email: user.email
            };

            return res.json({
                success: true,
                message: 'Update Succeeded',
                user: user
            });
        });
    }

    return {
        index: index,
        update: update
    }

})();

module.exports = UserController;