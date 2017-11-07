const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('public/javascripts'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query:
          {
            presets:['react']
          }
      },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loaders: [
          'css-loader'
        ]
      }
    ]
  }
}