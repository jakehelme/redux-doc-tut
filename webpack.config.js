var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                    __dirname + '/src'
                ],
                test: /\.jsx?$/,
                query:{
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};