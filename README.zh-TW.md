[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Languages](https://img.shields.io/badge/語言-12種-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

# LingPick

<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" align="right" width="15%"/>

**AI 工具決策引擎** — 找到真正好用又便宜的 AI 工具，幫你用最低成本找到最合適的。

> **痛點：** 開 50 個瀏覽器分頁，做 3 張對比表格，花 2 小時 —— 就為了找一個不花 $30/月的影片生成器。

> **解法：** 告訴我們你想做什麼，30 秒拿到 3 個按成本排序的推薦。

```
你："做一個產品介紹影片"
LingPick：→ Video Podcast Maker (免費)
          → 海螺 AI 影片 ($4.99/月)
          → CogVideoX 2.0 (開源)
```

→ 去 **[madapexai.com](https://madapexai.com)** 親自試試。

---

## 🌐 語言

| Language | 檔案 |
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

## ✨ 核心功能

| 功能 | 說明 |
|------|------|
| 🔍 智慧搜尋 | 中英日等多語言語義搜尋，覆蓋 14,000+ 個工具 |
| ⚡ 快速匹配 | 回答 5 個問題 → 3 個精準推薦，按成本、匹配度、速度排序 |
| 📖 全量目錄 | 按分類瀏覽：影片、圖像、程式、寫作、音樂、Agent、CLI、MCP |
| 💸 模型比價 | 400+ AI 模型價格橫向對比（GPT-4、Claude、Gemini、Llama、DeepSeek 等） |
| 🎯 場景方案 | 從 Reddit、知乎、Hacker News 提煉的真實工作流程，附成本分析 |
| 🤖 LingBot | AI 對話式工具推薦，25 個關鍵字自動觸發 |
| 🌏 12 種語言 | English / 中文 / Français / 日本語 / 한국어 / Tiếng Việt / Deutsch / Русский / العربية / हिन्दी / Indonesia / 繁體中文 |
| 🔄 即時資料 | 每 10 分鐘後端靜默更新，三級快取保障 (HOT/WARM/COLD) |

## 📊 資料規模

| 指標 | 數量 |
|------|------|
| 🛠️ 收錄 AI 工具 | **14,475** |
| 🔎 可搜尋工具 | **4,168** |
| 🧠 追蹤 AI 模型 | **418** |
| 🏢 監控廠商 | **46** |
| 💬 已收錄聊天機器人 | **30** |
| ⌨️ 已收錄程式碼 Agent | **32** |
| 💰 最低模型輸入價格 | **$0 / 百萬 tokens** |
| 🆓 有免費方案的工具 | **91.6%** |

## 🚀 使用方式

1. 打開 **[madapexai.com](https://madapexai.com)**
2. 在搜尋框輸入你想做的事
3. 即時取得結果

### 搜尋範例

| 你輸入 | LingPick 找到 |
|--------|-------------|
| "做影片" | AI 影片工具、AIGC 影片創作、CogVideoX |
| "寫程式" | 天工智碼 Skycode、碼上飛、Kimi K3 for Coding |
| "做PPT" | Dashi PPT、McKinsey PPT Design |
| "AI繪畫" | 創客貼 AI 畫匠、秒繪 AI、繪蛙 AI |
| "資料分析" | 研究資料分析工具集 |
| "make video" | Video Podcast Maker、Hailuo AI Video |
| "coding" | cli-llm-coding、Live Coding in Forth |

### LingBot 觸發關鍵字

`客服` `help` `support` `contact` `customer service` `售後` `技術支援` `幫助` `回饋` `complaint`

## 🏗️ 技術架構

```
┌─────────────────────────────────────────────┐
│                  Vercel CDN                   │
│           (React + Vite SPA)                  │
├─────────────────────────────────────────────┤
│  i18next (12 語言)  │  Fuse.js 混合搜尋      │
├─────────────────────────────────────────────┤
│                REST API 閘道                  │
│          (Express + PostgreSQL)                │
├──────────┬──────────┬──────────┬─────────────┤
│  搜尋     │  目錄     │  統計     │  LingBot    │
│  /agent   │  /models  │  /stats  │  /chat      │
├──────────┴──────────┴──────────┴─────────────┤
│        三級快取 (HOT/WARM/COLD)              │
│       背景靜默更新 (10 分鐘週期)              │
└─────────────────────────────────────────────┘
```

| 層級 | 技術棧 |
|------|--------|
| **前端** | React 18、Vite、TypeScript、i18next、Tailwind CSS |
| **搜尋** | Fuse.js（關鍵字 + 向量混合搜尋，threshold 0.35，品牌加權） |
| **後端** | Node.js、Express、PostgreSQL、PM2 |
| **快取** | 三級快取（HOT 5 分鐘 / WARM 1 小時 / COLD 24 小時）+ 背景靜默更新 |
| **CI/CD** | GitHub Actions → Vercel（前端）+ Contabo PM2（後端） |
| **國際化** | 12 種語言翻譯檔案，en-US 備用，動態 html[lang] |

## 🤝 參與貢獻

- 📞 **[推薦工具](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — 我們漏掉了好工具？告訴我們。
- 🐛 **[回報問題](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 發現 bug？來回報。
- 💡 **[功能建議](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — 有好的點子讓 LingPick 更好用？
- 🌍 **[翻譯改進](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 幫助我們完善你的語言版本。

## 🗣️ 社群

| 管道 | 連結 |
|------|------|
| 💬 討論 | [github.com/Madapexai/lingpick/discussions](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 網站 | [madapexai.com](https://madapexai.com) |
| 📧 郵件 | contact@madapexai.com |

## 📄 授權條款

本倉庫僅用於文件和社群討論。LingPick 原始碼為專有軟體。

---

*Made with 💚 for AI users everywhere*
