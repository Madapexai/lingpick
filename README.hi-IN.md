[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Languages](https://img.shields.io/badge/Languages-12-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

<p align="center">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" width="120" />
</p>

<h1 align="center">LingPick — AI Tool Decision Engine</h1>
<p align="center">
  <strong>AI Tool Decision Engine</strong><br>
  Find AI tools that actually work and are affordable.
</p>

<p align="center">
  <a href="https://madapexai.com">Website</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-quick-start">Usage</a> ·
  <a href="#-architecture">Architecture</a> ·
  <a href="https://github.com/Madapexai/lingpick/discussions">Discussions</a>
</p>

---

## 📖 Languages

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

## 🎯 What is LingPick?

LingPick is an **AI-powered tool discovery platform** that helps you find the best AI tools at the lowest cost. We've indexed **14,000+ AI tools** and **400+ AI models** — no more comparing everything yourself.

> **Problem:** 50 browser tabs, 3 comparison spreadsheets, 2 hours wasted — just to find a video generator under $30/month.

> **Solution:** Tell us what you want to do. Get 3 recommendations sorted by cost in 30 seconds.

```
You: "Make a product intro video"
LingPick: → Video Podcast Maker (Free)
          → Hailuo AI Video ($4.99/month)
          → CogVideoX 2.0 (Open Source)
```

## ✨ Features

| Feature | Description |
|------|------|
| 🔍 **Smart Search** | Multilingual semantic search (CN/EN/JP), covering 14,000+ tools |
| ⚡ **Quick Match** | Answer 5 questions → 3 precise recommendations, sorted by cost, relevance & speed |
| 📖 **Full Catalog** | Browse by category: Video, Image, Coding, Writing, Music, Agent, CLI, MCP |
| 💸 **Model Price Comparison** | Cross-compare pricing for 400+ AI models (GPT-4, Claude, Gemini, Llama, DeepSeek, etc.) |
| 🎯 **Scenario Solutions** | Real-world workflows distilled from Reddit, Zhihu, Hacker News, with cost analysis |
| 🤖 **LingBot Assistant** | AI conversational tool recommendation, triggered by 25 keywords |
| 🌏 **12 Languages** | English / 中文 / Français / 日本語 / 한국어 / Tiếng Việt / Deutsch / Русский / العربية / हिन्दी / Indonesia / 繁體中文 |
| 🔄 **Real-time Data** | Silent backend refresh every 10 minutes, three-tier cache |

## 📊 By the Numbers

| Metric | Count |
|------|------|
| 🛠️ AI Tools Listed | **14,475** |
| 🔎 Searchable Tools | **4,168** |
| 🧠 AI Models Tracked | **418** |
| 🏢 Vendors Monitored | **46** |
| 💰 Lowest Model Input Price | **$0 / million tokens** |

## 🚀 Quick Start

1. Open **[madapexai.com](https://madapexai.com)**
2. Type what you want to do in the search box
3. Get results instantly

### Search Examples

| You type | LingPick finds |
|--------|-------------|
| "做视频" | AI video tools, AIGC video creation, CogVideoX |
| "写代码" | 天工智码 Skycode, 码上飞, Kimi K3 for Coding |
| "做PPT" | Dashi PPT, McKinsey PPT Design |
| "AI绘画" | 创客贴 AI 画匠, 秒绘 AI, 绘蛙 AI |
| "数据分析" | Research data analysis toolset |
| "make video" | Video Podcast Maker, Hailuo AI Video |
| "coding" | cli-llm-coding, Live Coding in Forth |

### LingBot Trigger Keywords

Type any of these keywords to automatically activate the AI assistant:
`客服` `人工客服` `help` `support` `联系客服` `售后` `技术支持` `帮助` `求助` `反馈` `投诉` `complaint`

## 🏗️ Architecture

| Layer | Technology Stack |
|------|--------|
| **Frontend** | React 18, Vite, TypeScript, i18next, Tailwind CSS |
| **Search** | Fuse.js (keyword + vector hybrid search, threshold 0.35, brand weighting) |
| **Backend** | Node.js, Express, PostgreSQL, PM2 |
| **Cache** | Three-tier cache (HOT 5 min / WARM 1 hr / COLD 24 hr) + background silent refresh |
| **CI/CD** | GitHub Actions → Vercel (Frontend) + Contabo PM2 (Backend) |
| **i18n** | 12-language translation files, en-US fallback, dynamic html[lang] |

## 🤝 Contributing

- 📞 **[Suggest a Tool](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Did we miss a great tool? Let us know.
- 🐛 **[Report a Bug](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Found an issue? Tell us about it.
- 💡 **[Request a Feature](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Have an idea to make LingPick better?
- 🌍 **[Improve Translations](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Help us perfect your language version.

## 🗣️ Community

| Channel | Link |
|------|------|
| 💬 Discussions | [Discussion Board](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 Website | [madapexai.com](https://madapexai.com) |
| 📧 Email | contact@madapexai.com |

## 📄 License

MIT License — see the [LICENSE](./LICENSE) file for details.

---

<p align="center">Made with 💚 for AI users everywhere</p>
