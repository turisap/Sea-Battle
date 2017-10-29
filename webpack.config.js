/**
 * Created by HP on 28-Oct-17.
 */
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');


/*module.exports = {
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
            {
                test: /\.scss$/,
                //loaders: ['style-loader', 'css-loader', 'sass-loader']
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./styles/styles.css', {
            allChunks: true
        })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};*/
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
                    use : ['css-loader', 'sass-loader'],
                    fallback : 'style-loader'
                })
            }
        ]
    },
    plugins : [
        //new webpack.optimize.UglifyJsPlugin(), // minifier,
        new ExtractTextPlugin("[name].css"),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'index.html')),
        }),
    ]

};