var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.png|.jpg$/,
            use: ['url-loader']
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\s*)?$/,
            loader: 'file-loader'
        }]
    },
    devServer: {
        hot: true,
        port: 9990,
        host: '127.0.0.1',
        proxy: {
            "/api": 'http://localhost:9999/'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
}