const webpack = require('webpack')
const path = require('path')
const OfflinePlugin = require('offline-plugin')
const WebappWebpackPlugin = require('webapp-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ReactRootPlugin = require('html-webpack-react-root-plugin');
const OUT_DIR = path.resolve(__dirname, './dist')
const PORT = process.env.PORT || 9876
const testExitCode = process.env.TRAVIS_TEST_RESULT // 0 for passes tests, don't set to anything in dev env

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: OUT_DIR,
    publicPath: !!testExitCode ? '/funfunmentorship/' : '/',
    filename: '[name].js'
  },
  devServer: {
    port: PORT,
    publicPath: '/',
    contentBase: OUT_DIR,
    disableHostCheck: true
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', options: { cacheDirectory: true } },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader',
            options: { hmr: false }
          },
          { loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')()
              ]
            }
          },
          { loader: 'less-loader', options: {
            sourceMap: true
          }},
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackHarddiskPlugin(),   // Writes html to file
    new ReactRootPlugin(),    // Literally just adds the react root div tag...
    new WebappWebpackPlugin({    // Generates favicons and iconds from logo
      logo: path.resolve(OUT_DIR, './public/logo.svg'),
      favicons: {
        appName: 'FunFunMentorship',
        theme_color: "#dee6f2",
      },
    }),
    new HTMLPlugin({  // Create HTML from chunks
      title: 'Mentorship on FunFunForum',
      alwaysWriteToDisk: true,
      filename: path.resolve(OUT_DIR, './index.html'),
    }),
    // TODO: Not cache 100s of MB of images for each user 
    // In bird culture, this is considered a dick move.
    // Why are some user profile images so massive? Maybe scale in SW somehow
    new OfflinePlugin({
      ServiceWorker : {
        entry: path.resolve(OUT_DIR, './sw.js')
      },
      externals: [
        'https://ffforumautomator.herokuapp.com/hackable-data',
        '/funfunmentorship/',
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
