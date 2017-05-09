var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var mkdirp = require('mkdirp');

var userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    storageDir: { type: String, required: true }, //storage directory for docker files and what not
    deployemnets: [],

    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: { type: Date, default: Date.now, required: true }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.createStorageDirectory = function(callback) {
    var baseDir = './storage';
    this.storageDir = '/' + this._id.toString();

    var dockerFileDir = baseDir + this.storageDir + '/dockerfiles';
    var dockerComposeDir = baseDir + this.storageDir + '/docker-compose-ymls';
    
    mkdirp(dockerFileDir, function (err) {
        if (err) {
            callback(err, null);
        }

        mkdirp(dockerComposeDir, function (err) {
            if (err) {
                callback(err, null);
            }

            callback(null, true);
        });
    });
};

module.exports = mongoose.model('User', userSchema);