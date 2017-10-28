/**
 * Created by HP on 28-Oct-17.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    watch: true,
    devServer: {
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            /*{
                test: /\.scss$/,
                //loaders: ['style-loader', 'css-loader', 'sass-loader']
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }*/
        ]
    },
    /*plugins: [
        new ExtractTextPlugin('./styles/styles.css', {
            allChunks: true
        })
    ],*/
    stats: {
        colors: true
    },
    devtool: 'source-map'
};