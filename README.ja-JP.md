[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Languages](https://img.shields.io/badge/言語-12-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

# LingPick

<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" align="right" width="15%"/>

**AI ツール決定エンジン** — AIツールに払いすぎるのはもうやめましょう。本当に使える、一番安いものを見つけましょう。

> **課題：** 50個のブラウザタブ、3つの比較表、2時間の調査 — 月額30ドルもしない動画生成ツールを探すためだけに。

> **解決策：** やりたいことを入力するだけ。30秒でコスト順にランク付けされた3つのおすすめを取得。

```
あなた：「説明動画を作りたい」
LingPick：→ Video Podcast Maker (無料)
          → Hailuo AI Video ($4.99/月)
          → CogVideoX 2.0 (オープンソース)
```

→ **[madapexai.com](https://madapexai.com)** で実際にお試しください。

---

## 🌐 言語

| Language | ファイル |
|----------|----------|
| English | [README.md](./README.md) |
| 简体中文 | [README.zh-CN.md](./README.zh-CN.md) |
| Français | [README.fr-FR.md](./README.fr-FR.md) |
| 日本語 | [README.ja-JP.md](./README.ja-JP.md) |
| 한국어 | [README.ko-KR.md](./README.ko-KR.md) |
| Tiếng Việt | [README.vi-VN.md](./README.vi-VN.md) |
| Deutsch | [README.de-DE.md](./README.de-DE.md) |
| Русский | [README.ru-RU.md](./README.ru-RU.md) |
| العربية | [README.ar-SA.md](./README.ar-SA.md) |
| हिन्दी | [README.hi-IN.md](./README.hi-IN.md) |
| Bahasa Indonesia | [README.id-ID.md](./README.id-ID.md) |
| 繁體中文 | [README.zh-TW.md](./README.zh-TW.md) |

---

## ✨ 機能

| 機能 | 説明 |
|------|------|
| 🔍 スマート検索 | 中国語・英語・日本語など多言語対応の意味検索、14,000以上のツールをカバー |
| ⚡ クイックマッチ | 5つの質問に答える → コスト・適合度・速度でランク付けされた3つのおすすめ |
| 📖 フルカタログ | カテゴリ別に閲覧：動画、画像、コード、文章、音楽、Agent、CLI、MCP |
| 💸 モデル価格比較 | 400以上のAIモデル価格を横並びで比較（GPT-4、Claude、Gemini、Llama、DeepSeek…） |
| 🎯 シナリオソリューション | Reddit、知乎、Hacker Newsから厳選した実際のワークフロー、コスト分析付き |
| 🤖 LingBot | ニーズに基づいてツールを推奨するAIチャットボット。25個のトリガーキーワード |
| 🌏 12言語 | English, 中文, Français, 日本語, 한국어, Tiếng Việt, Deutsch, Русский, العربية, हिन्दी, Indonesia, 繁體中文 |
| 🔄 ライブデータ | 10分ごとのバックグラウンド更新、3層キャッシュ (HOT/WARM/COLD) |

## 📊 数字で見る

| 指標 | 数値 |
|------|------|
| 🛠️ インデックス済みAIツール | **14,475** |
| 🔎 検索可能ツール | **4,168** |
| 🧠 追跡中AIモデル | **418** |
| 🏢 モニタリング中ベンダー | **46** |
| 💬 掲載チャットボット | **30** |
| ⌨️ 掲載コードエージェント | **32** |
| 💰 最安モデル入力価格 | **$0 / 100万トークン** |
| 🆓 無料プランありのツール | **91.6%** |

## 🚀 クイックスタート

1. **[madapexai.com](https://madapexai.com)** にアクセス
2. 検索ボックスにやりたいことを入力
3. 即座に結果を取得

### 検索例

| 入力 | LingPickが見つけるもの |
|------|----------------------|
| "做视频" | AI動画ツール、AIGC動画クリエイター、CogVideoX |
| "写代码" | SkyCode、CodeFly、Kimi K3 for Coding |
| "做PPT" | Dashi PPT、McKinsey PPT Design |
| "AI绘画" | AIペインター、Miaohui AI、Huiwa AI |
| "数据分析" | 研究データ分析ツール |
| "make video" | Video Podcast Maker、Hailuo AI Video |
| "coding" | cli-llm-coding、Live Coding in Forth |

### LingBot トリガーキーワード

`客服` `help` `support` `contact` `customer service` `售后` `技术支持` `帮助` `反馈` `complaint`

## 🏗️ アーキテクチャ

```
┌─────────────────────────────────────────────┐
│                  Vercel CDN                   │
│           (React + Vite SPA)                  │
├─────────────────────────────────────────────┤
│  i18next (12言語)  │  Fuse.js ハイブリッド  │
├─────────────────────────────────────────────┤
│              REST API ゲートウェイ             │
│          (Express + PostgreSQL)                │
├──────────┬──────────┬──────────┬─────────────┤
│  検索     │ カタログ  │  統計     │  LingBot    │
│  /agent   │  /models  │  /stats  │  /chat      │
├──────────┴──────────┴──────────┴─────────────┤
│      3層キャッシュ (HOT/WARM/COLD)          │
│    バックグラウンド更新 (10分サイクル)       │
└─────────────────────────────────────────────┘
```

| レイヤー | 技術スタック |
|----------|-------------|
| **フロントエンド** | React 18、Vite、TypeScript、i18next、Tailwind CSS |
| **検索** | Fuse.js（キーワード + ベクトルハイブリッド、閾値 0.35、ブランドブースト） |
| **バックエンド** | Node.js、Express、PostgreSQL、PM2 |
| **キャッシュ** | HOT (5分) / WARM (1時間) / COLD (24時間)、バックグラウンド更新 |
| **CI/CD** | GitHub Actions → Vercel（フロントエンド）+ Contabo PM2（バックエンド） |
| **国際化** | 12言語の翻訳ファイル、en-US フォールバック、動的 html[lang] |

## 🤝 貢献

- 📞 **[ツールを提案](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — 良いAIツールが抜けていますか？教えてください。
- 🐛 **[バグを報告](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 問題を見つけましたか？お知らせください。
- 💡 **[機能を提案](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — LingPickをより良くするアイデアはありますか？
- 🌍 **[翻訳を改善](https://github.com/Madapexai/lingpick/discussions/categories/general)** — あなたの言語へのローカライズにご協力ください。

## 🗣️ コミュニティ

| チャンネル | リンク |
|-----------|--------|
| 💬 ディスカッション | [github.com/Madapexai/lingpick/discussions](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 ウェブサイト | [madapexai.com](https://madapexai.com) |
| 📧 メール | contact@madapexai.com |

## 📄 ライセンス

このリポジトリはドキュメントとコミュニティディスカッション専用です。LingPickのソースコードはプロプライエタリです。

---

*Made with 💚 for AI users everywhere*
