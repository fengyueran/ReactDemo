/* eslint-disable */
import path from 'path';
import webpack from 'webpack';
// reload=true 的意思是，如果碰到不能hot reload的情况，就整页刷新。
const publicPath = 'http://localhost:3002/';
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
// __dirname是当前运行的js所在的目录
export default {
  entry: [
    hotMiddlewareScript,
    path.join(__dirname, './src/index'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,"dist"),
    publicPath,

  },
  devtool: 'source-map',
  resolve: {
          // resolve 指定可以被 import 的文件后缀
    extensions: ['.js', '.jsx'],
  },
  module: {
    // loaders是一个数组，每个元素都用来指定loader
      loaders: [{
      // loader: 'eslint-loader', //指定使用什么loader，可以用字符串，也可以用数组
        },
        {
      test: /\.(jsx|js)$/, //test值为正则表达式，当文件路径匹配时启用
      loader: 'babel-loader', //指定使用什么loader，可以用字符串，也可以用数组
      exclude: /regexp/, //可以使用exclude来排除一部分文件
      }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
