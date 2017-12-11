const webpack = require('webpack');
const path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      use: [
        { loader: "style-loader" }, 
        { loader: "css-loader" },
        { loader: "sass-loader" }
      ],
      include: path.join(__dirname + '/src/style')
    }
  ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  
};
