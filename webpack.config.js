const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'client', 'app.js'),
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: path.join(__dirname, 'json'),
        loader: 'json-loader',
      },
      {
        test: /\.json$/, loader: 'json-loader',
      },
    ],
  },
};
