[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Languages](https://img.shields.io/badge/Languages-12-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

# LingPick

<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" align="right" width="15%"/>

**AI Tool Decision Engine** — Stop overpaying for AI tools. Find the cheapest one that actually works.

> **The Problem:** 50 browser tabs, 3 spreadsheets, 2 hours — just to find a video generator that doesn't cost $30/month.

> **Our Solution:** Type what you want to do. Get 3 ranked picks in 30 seconds. Done.

```
You: "make an explainer video"
LingPick: → Video Podcast Maker (Free)
          → Hailuo AI Video ($4.99/mo)
          → CogVideoX 2.0 (Open Source)
```

→ Go to **[madapexai.com](https://madapexai.com)** to try it yourself.

---

## 🌐 Languages

| Language | File |
|----------|------|
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

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 Smart Search | Semantic search across 14k+ tools in Chinese, English, Japanese, and more |
| ⚡ Quick Match | Answer 5 questions → 3 personalized picks ranked by cost, fit, and speed |
| 📖 Full Catalog | Browse all tools by category: Video, Image, Code, Writing, Music, Agent, CLI, MCP |
| 💸 Model Pricing | Compare 400+ AI model prices side-by-side (GPT-4, Claude, Gemini, Llama, DeepSeek...) |
| 🎯 Scenario Solutions | Curated workflows from Reddit, Zhihu, Hacker News — with cost and effect analysis |
| 🤖 LingBot | AI chatbot that recommends tools based on your needs. 25 trigger keywords |
| 🌏 12 Languages | English, 中文, Français, 日本語, 한국어, Tiếng Việt, Deutsch, Русский, العربية, हिन्दी, Indonesia, 繁體中文 |
| 🔄 Live Data | Background refresh every 10 minutes, three-tier cache (HOT/WARM/COLD) |

## 📊 By the Numbers

| Metric | Count |
|--------|-------|
| 🛠️ AI Tools indexed | **14,475** |
| 🔎 Searchable tools | **4,168** |
| 🧠 AI Models tracked | **418** |
| 🏢 Vendors monitored | **46** |
| 💬 Chatbots listed | **30** |
| ⌨️ Code Agents listed | **32** |
| 💰 Cheapest model input | **$0 / 1M tokens** |
| 🆓 Tools with free tier | **91.6%** |

## 🚀 Quick Start

1. Go to **[madapexai.com](https://madapexai.com)**
2. Type what you want to do in the search box
3. Get results instantly

### Search Examples

| You type | LingPick finds |
|----------|---------------|
| "做视频" | AI Video Tool, AIGC Video Creator, CogVideoX |
| "写代码" | SkyCode, CodeFly, Kimi K3 for Coding |
| "做PPT" | Dashi PPT, McKinsey PPT Design |
| "AI绘画" | AI Painter, Miaohui AI, Huiwa AI |
| "数据分析" | Research Data Analysis tools |
| "make video" | Video Podcast Maker, Hailuo AI Video |
| "coding" | cli-llm-coding, Live Coding in Forth |

### LingBot Trigger Keywords

`客服` `help` `support` `contact` `customer service` `售后` `技术支持` `帮助` `反馈` `complaint`

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│                  Vercel CDN                   │
│           (React + Vite SPA)                  │
├─────────────────────────────────────────────┤
│  i18next (12 lang)  │  Fuse.js Hybrid Search │
├─────────────────────────────────────────────┤
│                REST API Gateway               │
│          (Express + PostgreSQL)                │
├──────────┬──────────┬──────────┬─────────────┤
│  Search   │  Catalog  │  Stats   │  LingBot    │
│  /agent   │  /models  │  /stats  │  /chat      │
├──────────┴──────────┴──────────┴─────────────┤
│          3-Tier Cache (HOT/WARM/COLD)        │
│       Background Refresh (10min cycle)       │
└─────────────────────────────────────────────┘
```

| Layer | Tech Stack |
|-------|------------|
| **Frontend** | React 18, Vite, TypeScript, i18next, Tailwind CSS |
| **Search** | Fuse.js (keyword + vector hybrid, threshold 0.35, brand boost) |
| **Backend** | Node.js, Express, PostgreSQL, PM2 |
| **Caching** | HOT (5min) / WARM (1h) / COLD (24h), silent background refresh |
| **CI/CD** | GitHub Actions → Vercel (frontend) + Contabo PM2 (backend) |
| **I18n** | 12 translation files, en-US fallback, dynamic html[lang] |

## 🤝 Contributing

- 📞 **[Suggest a tool](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Know a great AI tool we're missing? Tell us.
- 🐛 **[Report a bug](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Found something broken? Let us know.
- 💡 **[Propose a feature](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Have an idea to make LingPick better?
- 🌍 **[Improve translations](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Help us localize to your language.

## 🗣️ Community

| Channel | Link |
|---------|------|
| 💬 Discussions | [github.com/Madapexai/lingpick/discussions](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 Website | [madapexai.com](https://madapexai.com) |
| 📧 Email | contact@madapexai.com |

## 📄 License

This repository is for documentation and community discussion only. The LingPick source code is proprietary.

---

*Made with 💚 for AI users everywhere*
