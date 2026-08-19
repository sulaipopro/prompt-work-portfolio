# prompt/work — AI開発の成果物ポートフォリオ

fal.ai（gpt-image-2）を中心としたAI画像生成の成果物（バナー／インフォグラフィック／LP）を紹介する、
1ページ完結のポートフォリオサイトです。ビルドツールを使わない素のHTML/CSS/JSで構成しており、
そのまま GitHub Pages 等の静的ホスティングにデプロイできます。

## 使用技術

- HTML5（セマンティックマークアップ）
- CSS3（カスタムプロパティ／CSS Grid・Flexbox／スクロールスナップ／レスポンシブ）
- Vanilla JavaScript（ビルド不要・外部ライブラリなし）
- フォント: [Zen Kaku Gothic New](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New)（Google Fonts, weights 400–900）
- 画像生成: fal.ai（openai/gpt-image-2）

## ディレクトリ構成

```
site/
├── index.html      # 全セクションを含む1ページ構成
├── style.css        # デザイントークン・レイアウト・レスポンシブ
├── script.js         # 作品データ・フィルター・ギャラリー・ケーススタディModal等の挙動
├── images/           # 作品画像・ヒーローイラスト
└── README.md
```

## セクション構成

1. **Header / Nav** — 固定ヘッダー、スクロールで背景が浮く
2. **Hero** — 「プロンプトが、成果物になる。」大見出し＋ヒーローイラスト
3. **Value strip** — 対応形式／対応業種のpillタグ＋業種アイコンの無限マーキー
4. **Style range gallery** — Obys風の横スクロールギャラリー。7作品を「かわいい→企業信頼感→ミニマル→ポップ」のトーングラデーション順に配置し、AIで対応できるトーンの幅を体感させる
5. **Works grid** — 成果物タイプ×業種の二軸pillフィルター。遊園地LPをfeatured（2×2 bento）で先頭固定、残り6点を通常グリッドで表示
6. **Method** — プロンプト設計→生成→選定→ブラッシュアップの4ステップ＋fal API解説図の実例紹介
7. **Guide by usecase** — 業種別の「課題→解決策」カードから、Worksグリッドの該当フィルターへジャンプ
8. **CTA / Contact** — メール相談への導線
9. **Footer** — ナビ再掲・連絡先・使用ツール表記
10. **Case study modal** — 作品カードクリックで開くケーススタディ（依頼内容・プロンプト設計の工夫・案の比較・クレジット・前後ナビ）

## 実装メモ

- 作品データは `script.js` 内の `WORKS` 配列を単一情報源とし、スタイルギャラリー／Worksグリッド／ケーススタディModal／Guideカードすべてをここから描画（表記ゆれ・タグの不整合を防止）。
- Worksグリッドの二軸フィルターはAND条件。該当0件時は空状態メッセージを表示。
- ケーススタディModalは `recruit-v1/v2`・`realestate-v1/v2` のように同一案件のバリエーションを `group` プロパティで束ね、詳細画面でのみ「案の比較」として並列表示。
- マーキーは同じ要素セットを十分な回数（4回）連結してから複製することで、どのビューポート幅でも継ぎ目なくループするよう対応。
- カラーは `accent_primary #F15A24` / `accent_secondary #31D6AD` の2色のみをUIチェコームに使用し、本文・背景はニュートラルなグレー／白に統一。
- favicon は絵文字（🎨）をSVGにインライン埋め込みして指定。
- OGP／`<title>`／メタディスクリプションを設定済み。

## ローカルでの確認方法

ビルド不要なので、任意の静的サーバーで `site/` を配信するだけで確認できます。

```bash
cd site
python3 -m http.server 8080
# http://localhost:8080 を開く
```

## デプロイ（GitHub Pages）

`site/` の中身をリポジトリのルート（または `docs/` ディレクトリ）にそのまま配置し、
GitHub Pages の公開設定を有効にするだけでデプロイできます。
