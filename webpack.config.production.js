const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractTextPlugin = new ExtractTextPlugin('style.css', {allChunks: true});
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
                loader: extractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
            }
        ]
    },
    sassLoader: {
        data: '@import "' + path.resolve(__dirname, 'theme/_theme.scss') + '";'
    },
    postcss: [autoprefixer],
    plugins: [
        extractTextPlugin,
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
