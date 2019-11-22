const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require("path");

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
      extensions: [".js", "ts", ".tsx"]
    },
    entry: {
        app: ["regenerator-runtime/runtime", "./students.tsx"],
        appStyles: "./mystyles.scss",
        vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"]
      },
      optimization: {
        splitChunks: {
            cacheGroups: {
              vendor: {
                chunks: 'all',
                name: 'vendor',
                test: /[\\/]node_modules[\\/]/,
                enforce: true,
              },
            },
          },    
   },
    output: {
      filename: "[name].[chunkhash].js"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: "awesome-typescript-loader",
            options: {
              useBabel: true,
              babelCore: "@babel/core" // needed for Babel v7
            }
          },    
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                  loader: "sass-loader",
                  options: {
                    implementation: require("sass")
                  }
                }
              ]
            },
            {
              test: /\.(png|jpg)$/,
              exclude: /node_modules/,
              //loader: "file-loader"
              loader: "url-loader?limit=500"
            },
            {
              test: /\.html$/,
              loader: "html-loader"
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html", // este el nombre que va a la carpeta dist
          template: "index.html", // fichero origen
        //   hash: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
          filename: "[name].[chunkhash].css",
          chunkFilename: "[id].css"
        })    
      ]    
  };
  