var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({
  _DEV_: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [devFlagPlugin]
};
