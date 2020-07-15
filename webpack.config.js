const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // sets mode to dev.
  mode: 'development',
  entry: {
    index: './src/index.js',
    printMe: './src/printMe.js',
  },
  // amazing. shows errors in which file and line.
  devtool: 'inline-source-map',
  // points the dev server at the dist directory to watch for changes.
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    // cleans up old build files on each new build.
    // currently not cleaning older ones since we are using dev-server.
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // creates a new html file in dist. Currently using src/index.html as template.
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: 'src/index.html',
    }),
  ],
  // outputs the bundles as seperate files based on the entry name.
  output: {
    // can do [contenthash] to view has number so. [name].[contenthash].js
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
