'use strict';

module.exports = {
  // configuration
    entry: './project/js/main',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/project',
        library: 'app'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'inline-source-map',
    
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