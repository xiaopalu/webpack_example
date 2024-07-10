const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development', //开发模式
  entry: './src/index.js', //入口文件
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //输出的路径
    filename: 'foo.bundle.js', //输出的名字
    clean: true,
  },

  // rules是module对象里面的
  module: {
    rules: [
      {
        test: /\.css$/, //处理后缀为CSS的文件
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
};
