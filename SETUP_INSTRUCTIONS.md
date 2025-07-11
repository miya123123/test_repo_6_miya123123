# GitHub Pages設定手順

## 1. GitHub Pagesの有効化

1. GitHub リポジトリ (https://github.com/miya123123/test_repo_6_miya123123) にアクセス
2. **Settings** タブをクリック
3. 左側メニューの **Pages** をクリック
4. **Source** を **GitHub Actions** に設定

## 2. 自動デプロイの確認

1. **Actions** タブをクリック
2. 最新の workflow run を確認
3. "Deploy to GitHub Pages" ワークフローが正常に実行されていることを確認

## 3. サイトへのアクセス

設定が完了すると、以下のURLでサイトにアクセスできます：
- https://miya123123.github.io/test_repo_6_miya123123/

## 4. 機能テスト

サイトにアクセスした後、以下の機能をテストしてください：

### ゲーム追加機能
1. "ゲーム" セクションまでスクロール
2. フォームに以下の例を入力してテスト：
   - **ゲームタイトル**: "テストゲーム"
   - **説明**: "これはテスト用のゲームです"
   - **ゲームURL**: "https://example.com"
   - **ジャンル**: "パズル"
3. "ゲームを追加" ボタンをクリック

### 検索機能
1. 追加したゲームを検索バーで検索
2. ジャンルフィルターでフィルタリング

### PWA機能
1. ブラウザで "アプリとして追加" または "ホーム画面に追加" を試す
2. オフライン時の動作を確認

## 5. 今後の更新

- コードを変更してmainブランチにプッシュすると自動的にサイトが更新されます
- GitHub Actionsのワークフローが自動的に実行されます

## トラブルシューティング

### GitHub Actionsが失敗する場合
1. Actions タブで詳細なエラーログを確認
2. permissions設定を確認
3. ワークフローファイルの構文を確認

### GitHub Pagesが表示されない場合
1. Settings > Pages の設定を確認
2. Custom domain設定がないことを確認
3. リポジトリがPublicであることを確認

## 作成されたファイル

- `index.html` - メインHTMLファイル
- `style.css` - スタイルシート
- `script.js` - JavaScript機能
- `sw.js` - Service Worker (PWA対応)
- `manifest.json` - PWAマニフェスト
- `.github/workflows/deploy.yml` - GitHub Actions設定