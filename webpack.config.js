const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    printMe: './src/printMe.js',
  },
  plugins: [
    // cleans up old build files on each new build.
    new CleanWebpackPlugin(),
    // creates a new html file in dist. Currently using src/index.html as template.
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'src/index.html',
    }),
  ],
  // outputs the bundles as seperate files based on the entry name.
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
