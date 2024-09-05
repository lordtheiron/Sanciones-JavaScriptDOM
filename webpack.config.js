const path = require('path');
module.exports = {
    entry: './assets/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './JS')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    mode: 'development'
};