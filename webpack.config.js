 const webpack = require('webpack');
 
 module.exports = {
     entry: './src/index.js',
     output: {
         path: './build',
         //publicPath: '/dev/',
         filename: 'app.bundle.js',
     },
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