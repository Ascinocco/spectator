var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var mkdirp = require('mkdirp');

var userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    storageDir: { type: String, required: true }, //storage directory for docker files and what not
    deployemnets: [],

    createdAt: { type: Date, defaulte: Date.now, required: true },
    updatedAt: { type: Date, defaulte: Date.now, required: true }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.createStorageDirectory = function(callback) {
    var dockerFileDir = '/storage/' + this._id.toString() + '/dockerfiles';
    mkdirp(dockerFileDir, function (err) {
        
    });
};

module.exports = mongoose.model('User', userSchema);