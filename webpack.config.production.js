const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const multi = require('multi-loader');
const extractTextPlugin = new ExtractTextPlugin('style.css', {allChunks: true});
const extractTextPluginBlack = new ExtractTextPlugin('style-black.css', {allChunks: true});

const theme = '@import"' + path.resolve(__dirname, 'theme/_theme.scss') + '";';
module.exports = {
    context: __dirname,
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['', '.scss', '.js', '.json', '.md'],
        packageMains: ['browser', 'web', 'browserify', 'main', 'style'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }, {
                test: /\.(scss|css)$/,
                loader: multi(extractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'),
                    extractTextPluginBlack.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?data=' + theme + '&sourceMap'))
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        extractTextPlugin,
        extractTextPluginBlack,
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
