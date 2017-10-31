/**
 * Created by HP on 28-Oct-17.
 */
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const HotModuleReplacementPlugin = require('webpack-hot-middleware');


module.exports = {
    entry : {
        app : [
            './src/app.js',
            './styles/styles.scss'
        ]
    },
    output : {
        path : path.resolve(__dirname, './build'),
        filename : 'bundle.js'
    },
    watch: true,
    devServer: {
        inline: true
    },
    module : {
        rules: [
            /*{
                test : /\.css$/,
                use  : ['style-loader', 'css-loader']
            },*/
            {
                test : /\.js$/,
                use  : 'babel-loader'
            },
            {
                test : /\.s[ac]ss$/,
                use : ExtractTextPlugin.extract({
                    //use : ['css-loader', 'sass-loader'],
                    fallback : 'style-loader',
                    use :[
                        {
                            loader : 'css-loader',
                            options : {url:false} // prevent urls from processing (necessary for backgrounds
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin(), // minifier,
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'index.html')),
        }),
    ]
};