var mongoose = require('mongoose');
var mkdirp = require('mkdirp');
var moment = require('moment');
var fs = require('fs');

var deploymentSchema = mongoose.Schema({
    userId:       { type: String, required: true },
    name:         { type: String, required: true },
    description:  { type: String, required: true },
    gitUrl:       { type: String },
    branches:       [ { type: String } ],

    dockerComposeYmls:  [ 
                            { 
                                helpfulName: String,
                                fileName: { type: String, default: 'docker-compose.yml', required: true },
                                description: String,
                                path: {type: String, default: '', required: true},
                                createdAt: { type: Date, default: Date.now, required: true },
                                updatedAt: { type: Date, default: Date.now, required: true }
                            }
                        ],
    dockerFiles:        [
                            {
                                helpfulName: String,
                                fileName: { type: String, default: 'Dockerfile', required: true },
                                description: String,
                                path: {type: String, default: '', required: true},
                                createdAt: { type: Date, default: Date.now, required: true },
                                updatedAt: { type: Date, default: Date.now, required: true }
                            }
                        ],
    
    settings:           [],

    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: { type: Date, default: Date.now, required: true }

});

deploymentSchema.methods.belongsTo = function (user) {
    if (user._id) {
        this.userId = user._id;
        return true;
    }

    return false;
}

deploymentSchema.statics.createDeployment = function (data, user, callback) {
        var newDep = This();
        
        newDep.userId   = user._id;
        newDep.name     = data.name;
        newDep.description = data.description;
        
        if (data.gitUrl) {
            newDep.gitUrl = data.gitUrl;
        } else {
            newDep.gitUrl = ''
        }

        if (data.branches) {
            newDep.branches = data.branches;
        } else {
            newDep.branches = []
        }

        if (data.dockerComposeYml) {

            var filePath = './storage' + user.storageDir + '/' 
                + 'docker-compose-ymls' + '/'
                + moment().format().toString() + '/' 
                + data.dockerComposeYml.fileName;
            
            var fileName = data.dockerComposeYml.fileName;

            var ymlData = {
                helpfulName: data.dockerComposeYml.helpfulName,
                fileName: data.dockerComposeYml.fileName,
                description: data.dockerComposeYml.description,
                path: filePath
            };

            newDep.dockerComposeYmls.push(ymlData);

            fs.writeFile(filePath, data.dockerComposeYml.file, function(err) {
                if (err) {
                    return console.error(err);
                }

                console.log('docker-compose file saved');
            });

        } else {
            newDep.dockerComposeYmls = [];
        }

        if (data.dockerFile) {
            
            var filePath = './storage' + user.storageDir + '/' 
                + 'dockerfiles' + '/'
                + moment().format().toString() + '/' 
                + data.dockerFile.fileName;
                        
                var fileName = data.dockerFile.fileName;

                var ymlData = {
                    helpfulName: data.dockerFile.helpfulName,
                    fileName: data.dockerFile.fileName,
                    description: data.dockerFile.description,
                    path: filePath
                };

                newDep.dockerFile.push(ymlData);

                fs.writeFile(filePath, data.dockerFile.file, function(err) {
                    if (err) {
                        return console.error(err);
                    }

                    console.log('dockerfile file saved');
                });

        } else {
            newDep.dockerFiles = [];
        }

        if (data.settings) {
            newDep.settings = data.settings;
        } else {
            newDep.settings = [];
        }

        // associate the new deployment to the user who owns it
        newDep.belongsTo(user);

        callback(null, newDep);
}

module.exports = mongoose.model('Deployment', deploymentSchema);