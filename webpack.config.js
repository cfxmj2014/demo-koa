const webpack = require('webpack');
const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const glob = require('glob');

const files = glob.sync('./static/script/**/*.js');

const port = 5000;

// 导入script文件夹下所有js到入口文件
function entries(files) {
  var ret = {},
      name = '';

  files.map((val) => {
    name = val.slice(('./static/script/').length, 0 - '.js'.length);

    ret[name] = val;
  });

  return ret;
}

module.exports = {
  // 调试log样式
  devtool: '#inline-source-map',
  // 文件路径的指向
  resolve: {
    // 自动补全识别哪些后缀
    // extensions: ['', '.js'],
    // 模块别名定义，方便后续直接引用别名，无须多写长的地址
      // alias: {
      // }
  },
  // 入口文件
  entry: entries(files),
  // 输出文件
  output: {
    path: `${__dirname}/dist/static/script`,
    filename: '[name].js',
    publicPath: '/static/script/'
  },
  // 进行字符串的处理
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: ['transform-runtime'],
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // 打包页面公用文件，名为commons.js
    new CommonsChunkPlugin('commons')
  ],
  devServer:{
    proxy: {
      '*': `http://localhost:${port}`
    },
    port: port + 1,
    publicPath: '/static/script/',
    historyApiFallback: true,
  }
}