'use strict';

let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 4000,
    hot: true,
    open: true,
    client: {
      overlay: false, // Отключает отображение ошибок и предупреждений в виде оверлея
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/html/mainPage.html' })
  ],
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|less|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource', // Заменяем file-loader на asset/resource
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },


};
