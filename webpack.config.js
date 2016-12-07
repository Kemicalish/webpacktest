const webpack = require('webpack');
const conf = require('./webpack/conf.js');
console.log(conf.paths.output);

 module.exports = {
     entry: './src/index.js',
     output: conf.paths.output,
     devServer: { 
        inline: true //default should be true. Only use iframe if production should be within iframe too
    },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
 }