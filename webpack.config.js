"use strict";
const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
    entry: './scripts/main.ts',
    output: {
        filename: 'dist/[name].js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css-loader?importLoaders=1',
                    'postcss-loader',
                    'sass'
                ]
            },
            {
                test: /\.(?:png|ttc|gif|jpg)$/,
                loader: 'file?name=./dist/[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new BabiliPlugin()
    ],
    target: 'electron'

}