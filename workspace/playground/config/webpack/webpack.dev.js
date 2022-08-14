const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',

    devtool: 'source-map',

    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },

    output: {
        path: '/dist',
        filename: '[name].bundle.js',
        clean: true,
        publicPath: '/',
    },
});
