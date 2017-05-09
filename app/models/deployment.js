var mongoose = require('mongoose');

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
                                createdAt: { type: Date, defaulte: Date.now, required: true },
                                updatedAt: { type: Date, defaulte: Date.now, required: true }
                            }
                        ],
    dockerFiles:        [
                            {
                                helpfulName: String,
                                fileName: { type: String, default: 'Dockerfile', required: true },
                                description: String,
                                path: {type: String, default: '', required: true},
                                createdAt: { type: Date, defaulte: Date.now, required: true },
                                updatedAt: { type: Date, defaulte: Date.now, required: true }
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
            newDep.dockerComposeYmls.push(data.dockerComposeYml);
            // save file to disk
        } else {
            newDep.dockerComposeYmls = [];
        }

        if (data.dockerFile) {
            newDep.dockerFiles.push(data.dockerFile);
            // save file to disk
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