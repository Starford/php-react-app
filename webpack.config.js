const { resolve } = require('path');
const srcDir = resolve(__dirname, 'src');

module.exports = {
  entry: `${srcDir}/js/index.js`,
  output: {
    filename: 'main.js'
  },
  module: {
      rules: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      }]
  }
}