# Vercel向けマルチプリセットデプロイ手順

## 目的

単一リポジトリ・単一コードベースで、業種ごとに独立したVercelプロジェクトを運用します。

対象例:

- ai-barber-demo
- ai-gym-demo
- ai-plumbing-demo
- ai-cleaning-demo

## 前提

- 同一Gitリポジトリを利用
- プリセット切替は `NEXT_PUBLIC_BUSINESS_PRESET` のみ
- コンポーネント改修なしで業種切替可能

## 1. プリセットキー確認

利用可能キー:

- barber
- gym
- plumbing
- cleaning

参照:

- `src/constants/presets.ts`
- `src/lib/preset-resolver.ts`

## 2. Vercelプロジェクトを業種別に作成

1. Vercelで同じGitリポジトリを4回インポート
2. プロジェクト名を業種別に設定
3. Build Commandは既定値（`next build`）を使用

## 3. 各プロジェクトで環境変数を設定

各Vercelプロジェクトで以下を設定:

- Key: `NEXT_PUBLIC_BUSINESS_PRESET`
- Value: 対象プリセットキー

設定例:

- ai-barber-demo -> `barber`
- ai-gym-demo -> `gym`
- ai-plumbing-demo -> `plumbing`
- ai-cleaning-demo -> `cleaning`

## 4. デプロイ検証

各URLで以下を確認:

- ヒーロー文言が業種に一致
- サービス/口コミが業種に一致
- ロゴと配色が業種に一致
- title/description/OG画像が業種に一致
- 電話・予約CTAが業種情報を参照

## 5. 画像・ブランド差し替え運用

1. `public/images/` にロゴ/OG/主要画像を配置
2. `src/content/images.ts` の対象プリセットを更新
3. 必要に応じて `src/constants/theme.ts` と `src/styles/tokens.css` を更新
4. 対象Vercelプロジェクトのみ再デプロイ

## 6. 新規業種追加時の運用

1. `src/constants/presets.ts` に新プリセット追加
2. `src/content/services.ts` と `src/content/testimonials.ts` を追加
3. `src/content/images.ts` へ画像パック追加
4. `src/lib/preset-resolver.ts` が自動的にキー解決
5. Vercelで新規プロジェクトを1つ追加し、環境変数を設定

## 7. 運用のポイント

- 業種差分はプリセット層に限定
- UIコンポーネントは共通のまま維持
- 問い合わせ導線とSEO差分は設定ファイルで管理
- 1プロジェクト1業種でURLと運用責任を分離
