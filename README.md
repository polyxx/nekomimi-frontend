ネコミミでもわかるフロントエンド開発環境構築
==

このリポジトリは [ネコミミでもわかるフロントエンド開発環境構築](https://nextpublishing.jp/book/10077.html) のサポート・サンプルリポジトリです。
章ごとの成果物をそれぞれのディレクトリに用意しています。

## コードの修正について

p.49におけるCSSModulesの設定について、 `css-loader` のアップグレードに伴い設定方法が変更となっています。  
`options.modules` を以下のように修正してください。

```js
{
  loader: 'css-loader',
  // CSSModulesのオプションを追加
  options: {
    modules: {
      localIdentName: '[name]__[local]--[hash:base64:5]'
    },
    importLoaders: 1
  }
},
```

## 連絡先

@polyxx（TwitterまたはGitHub）までお問い合わせください。
