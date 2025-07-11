# Game Gallery - ゲーム公開サイト

## 概要

Game Galleryは、ゲームクリエイターが作品を簡単に公開し、プレイヤーが新しいゲームを発見できるプラットフォームです。

## 機能

- 📱 **レスポンシブデザイン**: PC、タブレット、スマートフォンで最適化
- 🎮 **ゲーム公開**: URLを入力するだけで簡単にゲームを公開
- 🔍 **検索・フィルター**: ゲームタイトルやジャンルでの検索機能
- 💾 **ローカル保存**: ブラウザのローカルストレージを使用してデータを保存
- 🚀 **PWA対応**: オフライン対応とアプリのようなUX
- 🎨 **モダンUI**: 美しいグラデーションとアニメーション

## テクノロジー

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **スタイリング**: CSS Grid, Flexbox, カスタムプロパティ
- **フォント**: Noto Sans JP, Font Awesome
- **デプロイ**: GitHub Actions + GitHub Pages

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/yourusername/game-gallery.git
cd game-gallery
```

### 2. GitHub Pagesの設定

1. GitHubリポジトリの Settings > Pages に移動
2. Source を "GitHub Actions" に設定
3. Actions のワークフローが自動的に実行されます

### 3. 自動デプロイ

- `main` または `master` ブランチにプッシュすると自動的にデプロイされます
- GitHub Actionsのワークフローがビルドとデプロイを実行します

## 使い方

### ゲームの公開

1. サイトにアクセス
2. "ゲーム" セクションまでスクロール
3. "新しいゲームを公開" フォームに必要事項を入力
4. "ゲームを追加" ボタンをクリック

### ゲームの検索

1. 検索バーにゲームタイトルを入力
2. ジャンルフィルターで絞り込み
3. ゲームカードの "プレイ" ボタンをクリック

## ファイル構成

```
game-gallery/
├── index.html          # メインHTMLファイル
├── style.css           # スタイルシート
├── script.js           # JavaScript機能
├── sw.js              # Service Worker (PWA対応)
├── manifest.json      # PWA Manifest
├── README.md          # このファイル
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actionsワークフロー
```

## GitHub Actionsワークフロー

ワークフローは以下のステップで実行されます：

1. **Build**: コードのチェックアウトとリント
2. **Deploy**: GitHub Pagesへの自動デプロイ

## カスタマイズ

### スタイルの変更

`style.css` でカラーテーマやレイアウトを変更できます：

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
}
```

### 機能の追加

`script.js` の `GameManager` クラスを拡張して新機能を追加できます。

## ライセンス

MIT License

## 貢献

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## サポート

問題や質問がある場合は、GitHubのIssuesを作成してください。
