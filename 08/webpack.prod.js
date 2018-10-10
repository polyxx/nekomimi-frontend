const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const docs = path.join(__dirname, 'docs');

module.exports = merge(common, {
  // productionモードで実行します
  mode: 'production',
  output: {
    filename: 'app.min.js',
    path: docs
  }
});
