import path from 'path'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import WebpackCleanupPlugin from 'webpack-cleanup-plugin'

export default (env, argv) => {
  const PRODUCTION = (argv.mode === 'production')
  const DEV_SERVER = 'http://localhost:8000'
  const srcPath = path.resolve('./src')

  return {
    mode: argv.mode,
    context: srcPath,
    entry: [
      ...(PRODUCTION ? [] : [
        `webpack-dev-server/client?${DEV_SERVER}`,
        'webpack/hot/only-dev-server'
      ]),
      path.join(__dirname, 'src', 'styles', 'index.css'),
      path.join(__dirname, 'src', 'index.js')
    ],
    resolve: {
      modules: [
        srcPath,
        'node_modules'
      ]
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ '@babel/env', { modules: false, useBuiltIns: 'usage' } ],
              '@babel/react'
            ],
            plugins: [
              'lodash',
              [ '@babel/plugin-proposal-decorators', { legacy: true } ],
              [ '@babel/plugin-proposal-class-properties', { loose: true } ],
              [ '@babel/plugin-proposal-function-bind' ]
            ]
          }
        }
      }, {
        test: /\.css$/,
        use: [{
          loader: PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader?sourceMap'
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader?sourceMap'
        }]
      }]
    },
    plugins: [
      ...(PRODUCTION ? [
        new LodashModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[name].[contenthash].css'
        }),
        new CopyWebpackPlugin([
          { from: 'images', to: 'images' },
          { from: 'favicon.ico', to: 'favicon.ico' }
        ]),
        new WebpackCleanupPlugin({ quiet: true })
      ] : [
        new webpack.DefinePlugin({ __VERSION__: JSON.stringify('localdev.next') }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
      ]),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          terserOptions: {
            output: {
              comments: false
            }
          }
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            preset: 'advanced'
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
            chunks: 'initial'
          }
        }
      }
    },
    output: {
      filename: PRODUCTION ? '[name].[chunkhash].js' : '[name].js',
      chunkFilename: PRODUCTION ? '[name].[chunkhash].js' : '[name].js',
      sourceMapFilename: '[file].map'
    },
    performance: { hints: false },
    devtool: PRODUCTION ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: './src/',
      publicPath: '/',
      hot: true,
      inline: true,
      port: 8000
    }
  }
}
