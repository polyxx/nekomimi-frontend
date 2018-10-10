const path = require('path');
// webpackモジュールを読み込む
const webpack = require('webpack');
// html-webpack-pluginモジュールを読み込む
const HtmlWebpackPlugin = require('html-webpack-plugin');
// mini-css-extract-pluginの追加
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  // developmentモードで実行します
  mode: 'development',
  // ビルドを実行するファイルパス
  entry: path.resolve(src, 'js/render.jsx'),
  output: {
    // 生成されるファイル名
    filename: 'index.bundle.js',
    // 生成先のディレクトリー
    path: dist
  },
  resolve: {
    // import文のパス指定にnode_modulesを省略できるようにします
    modules: ['node_modules'],
    // .jsまたは.jsxの拡張子を省略できるようにします
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre', // babel-loaderよりも前に実行される
        loader: 'eslint-loader'
      },
      {
        // ルールを適用するファイルの正規表現
        test: /\.(js|jsx)$/,
        // node_modules以下のファイルには適用しないようにします
        exclude: /node_modules/,
        // 使用するloader
        loader: 'babel-loader'
      },
      { // CSSの設定を追加する
        test: /\.css$/,
        exclude: /node_modules/,
        // loaderを複数使用する場合はuseを使います
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  // sourceMappingの設定
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: dist, // 開発サーバーを立ち上げる参照ディレクトリー
    hot: true, // hot-reloadを有効にします
    port: 3000 // サーバーを立ち上げるポート番号
  },
  plugins: [
    // hot-reloadを有効にするプラグインを追加
    new webpack.HotModuleReplacementPlugin(), // HtmlWebpackPluginプラグインを追加
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'html/index.html')
    }),
    new MiniCSSExtractPlugin({ // MiniCSSExtractPluginを追加
      filename: 'app.css' // ファイル名を指定
    })
  ]
};
