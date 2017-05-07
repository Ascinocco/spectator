var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./app/resources/js/app.js",
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
        publicPath: './public/'
    }
};