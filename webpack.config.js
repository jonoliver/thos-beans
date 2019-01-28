const path = require('path');

module.exports = {
  output: {
    library: 'thosBeans',
    libraryTarget: 'umd',
    filename: 'thosBeans.js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|mp3)$/,
        use: [
          {
            loader: 'url-loader',
            options: {},
          },
        ],
      },
    ],
  },
};