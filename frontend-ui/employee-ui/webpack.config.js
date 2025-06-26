const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3004,
    host: '0.0.0.0',
  },
  output: {
    publicPath: 'http://localhost:3004/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'employee',
      filename: 'remoteEntry.js',
      exposes: {
        './EmployeeApp': './src/EmployeeApp',
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};