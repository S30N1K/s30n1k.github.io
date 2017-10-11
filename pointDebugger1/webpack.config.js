const path = require('path');
const config = require('./package.json');
const webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    context: __dirname + '/src',
    entry: {
        index: './point.debugger.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'point.debugger.js',
        library: 'pointDebugger',
        publicPath: ""
    },
    module: {

        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/, /scripts\/lib/],
                use: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.(png|jpg|gif|ttf|tpl)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            warnings: false,
            drop_console: false,
            unsafe: true
        })
    ]
};

