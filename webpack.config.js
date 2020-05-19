const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000
  },
  plugins: [ new CleanWebpackPlugin() ],
  output: {
    filename: './dist/index.js'
  }
}
