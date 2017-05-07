var mongoose = require('mongoose');

var deploymentSchema = mongoose.Schema({
    name: String,
    description: String,
    gitUrl: String,
    branch: String,
    settings: []
});

module.exports = mongoose.model('Deployment', deploymentSchema);