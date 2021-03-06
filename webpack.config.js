const webpack = require('webpack');
const conf = require('./webpack/env.js');
console.log(conf.paths.output);

module.exports = {
    entry: './src/index.js',
    output: conf.paths.output,
    devServer: {
        inline: true //default should be true. Only use iframe if production should be within iframe too
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: /node_modules/,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                //'image-webpack' //before enabling this, check the quality settings in the imageWebpackLoader section
            ]
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
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
    ],
    imageWebpackLoader: {
        mozjpeg: {
            quality: 65
        },
        pngquant: {
            quality: '65-90',
            speed: 4
        },
        svgo: {
            plugins: [
                {
                    removeViewBox: false
                },
                {
                    removeEmptyAttrs: false
                }
            ]
        }
    }
}