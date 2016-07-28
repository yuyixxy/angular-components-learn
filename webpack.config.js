var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: false,
    entry: {
        index: [path.join(__dirname, 'src/client/app/app.js')],
        vendor: [
            'angular',
            'angular-ui-router'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/dist/, /node_modules/], loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            inject: 'body',
            hash: false
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
}