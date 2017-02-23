const pkg = require('./package');
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
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/build'
    },
    resolve: {
        extensions: ['', '.scss', '.js', '.json'],
        packageMains: ['browser', 'web', 'browserify', 'main', 'style']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: [/(node_modules)/]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/(node_modules)/, /react-css-themr/]
            }, {
                test: /\.(scss|css)$/,
                loader: multi(extractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'),
                    extractTextPluginBlack.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?data=' + theme + '&sourceMap'))
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: 'source-map-loader'}
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        extractTextPlugin,
        extractTextPluginBlack,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            VERSION: JSON.stringify(pkg.version)
        })
    ]
};
