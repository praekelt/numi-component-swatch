var webpack = require('webpack');


module.exports = {
  entry: {
    collection: './src/client/views/collection/index.js'
  },
  devtool: '#sourcemap',
  output: {
    path: 'static/js/',
    filename: '[name].min.js',
    publicPath: '/static/js/'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({output: {comments: false}})
  ]
};
