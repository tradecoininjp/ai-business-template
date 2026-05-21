# ローカルビジネステンプレート納品プレイブック

## 1. クローン直後の初期設定

1. `npm install`
2. `.env.example` を基に `.env.local` を作成
3. `NEXT_PUBLIC_BUSINESS_PRESET` を対象業種に変更
4. `npm run dev` で表示確認

利用可能なプリセット:

- `barber`
- `gym`
- `plumbing`
- `cleaning`

## 2. 業種別カスタマイズの編集ポイント

- 基本情報と導線文言: `src/constants/presets.ts`
- サービス一覧: `src/content/services.ts`
- お客様の声: `src/content/testimonials.ts`
- 画像/ロゴ差し替え: `src/content/images.ts` と `public/images/`
- テーマ配色: `src/constants/theme.ts` と `src/styles/tokens.css`

## 3. 画像・ブランド差し替え手順

1. `public/images/` にロゴ、ヒーロー、OG画像を配置
2. `src/content/images.ts` の該当プリセットのパスと `alt` を更新
3. `src/constants/presets.ts` の `business.logo` と `seo.ogImage` を確認
4. 実機で表示崩れとLCP対象画像を確認

## 4. 新規業種プリセット追加手順

1. `src/constants/presets.ts` で既存プリセットを複製し新キーを作成
2. `src/content/services.ts` に業種サービス配列を追加
3. `src/content/testimonials.ts` に口コミ配列を追加
4. `src/content/images.ts` に画像パックを追加
5. 必要に応じて `src/constants/theme.ts` と `src/styles/tokens.css` に新テーマを追加
6. `businessPresets` に登録して `.env.local` で切り替え確認

## 5. 納品前チェックリスト

- `npm run build` が成功する
- メタ情報（title/description/og画像）が業種に一致
- モバイル時に電話・予約導線が常時視認可能
- `map` セクションが正しいエリアを表示
- 主要セクションの文言が対象クライアント仕様に一致

## 6. デプロイ手順（Vercel想定）

1. リポジトリをVercelに接続
2. Environment Variablesに `NEXT_PUBLIC_BUSINESS_PRESET` を設定
3. Productionビルドを実行
4. デプロイ後に以下を確認
   - トップ表示
   - CTAリンク
   - OGPプレビュー
   - フォーム/連絡先情報

## 7. 再利用時の推奨運用

- 1案件1ブランチで運用し、業種差分はプリセット側に閉じる
- UIコンポーネントは共通化を維持し、業務文言のみを更新
- 画像差し替え時は `alt` も同時に更新しSEO整合を保つ
