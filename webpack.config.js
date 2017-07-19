'use strict';

module.exports = {
  // configuration
    entry: './js/App',
    output: {
        filename: 'main.js',
        library: 'app'
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map',
    
    // Module to install babel write npm i babel-loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
};