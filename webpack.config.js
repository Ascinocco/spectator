var webpack = require('webpack');
var babel = require('babel-core');
var path = require('path');

module.exports = {
    entry: {
        app: './app/resources/js/spectator/app.js',
        landing: './app/resources/js/landing/app'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].bundle.js',
        publicPath: './public/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, 
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    plugins: []
};

