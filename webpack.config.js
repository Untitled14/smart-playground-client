const webpack = require('webpack');
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }

      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]',
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
    ]
  },
  resolve: {
    alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@src': path.resolve(__dirname, 'src')
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    overlay: true,
    proxy: {
      '/api': {
        target: 'https://smart-playground.herokuapp.com',
        secure: true,
        changeOrigin: true
      }
    }
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.tpl.html')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new VueLoaderPlugin()
  ])
} else {
  module.exports.plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.tpl.html')
    }),
    new VueLoaderPlugin()
  ]
}
