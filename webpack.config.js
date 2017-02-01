"use strict";
const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
    entry: './scripts/main.ts',
    output: {
        filename: 'dist/[name].js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(?:png|ttf|woff|woff2|eot|svg|gif|jpg)$/,
                loader: 'file-loader?name=./dist/[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new BabiliPlugin()
    ],
    target: 'electron'

}