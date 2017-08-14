module.exports = {
  entry: './src/main.js',
  output: {
    library: "webrtc.lib",
    libraryTarget: "umd",
    filename: "dist/webrtc.lib.js",
    auxiliaryComment: "Test Comment"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
};
