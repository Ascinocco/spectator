var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        nameField: 'name',
        passwordField: 'password',
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        process.nextTick(function() {
            User.findOne({ 'email': email }, function (err, user) {
                if (err) {
                    return done(err);
                }

                if (user) {
                    return done(null, false, req.flash('message', 'That email is already in use'));
                } else {
                    var newUser = User();
                    newUser.email = email;
                    newUser.name = req.body.name;
                    newUser.password = newUser.generateHash(password);

                    newUser.save(function (err) {
                        if (err) {
                            throw err;
                        }

                        return done(null, newUser);
                    });
                }
            });
        });
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        User.findOne({ 'email': email }, function (err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, req.flash('message', 'Account not found'));
            }

            if (!user.validPassword(password)) {
                return done(null, false, req.flash('message', 'Invalid Password'));
            }

            return done(null, user);
        });
    }));
};