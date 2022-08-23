const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          { test: /\.svg$/, use: 'svg-inline-loader' },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
          { test: /\.(js)$/, use: 'babel-loader' },
          { test: /\.html$/, use: 'html-loader' },
          { test: /\.(gif|png|jpe?g|svg)$/i, use: 'file-loader' },
        ]
      },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devServer : {
        compress: true,
        port:3000.
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
    mode: 'development',
};