[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Languages](https://img.shields.io/badge/语言-12种-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

<p align="center">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" width="120" />
</p>

<h1 align="center">LingPick — AI 工具决策引擎</h1>
<p align="center">
  <strong>AI 工具决策引擎</strong><br>
  找到真正好用又便宜的 AI 工具。
</p>

<p align="center">
  <a href="https://madapexai.com">网站</a> ·
  <a href="#-核心功能">功能</a> ·
  <a href="#-使用方式">使用</a> ·
  <a href="#-技术架构">架构</a> ·
  <a href="https://github.com/Madapexai/lingpick/discussions">讨论</a>
</p>

---

## 📖 语言

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

## 🎯 LingPick 是什么？

LingPick 是一个 **AI 驱动的工具发现平台**，帮你用最低成本找到最合适的 AI 工具。我们索引了 **14,000+ 个 AI 工具**和 **400+ 个 AI 模型**，你不用再自己一个一个对比了。

> **痛点：** 开 50 个网页标签，做 3 张对比表格，花 2 小时 —— 就为了找一个不花 $30/月的视频生成器。

> **解法：** 告诉我们你想做什么，30 秒拿到 3 个按成本排序的推荐。

```
你："做一个产品介绍视频"
LingPick：→ Video Podcast Maker (免费)
          → 海螺 AI 视频 ($4.99/月)
          → CogVideoX 2.0 (开源)
```

## ✨ 核心功能

| 功能 | 说明 |
|------|------|
| 🔍 **智能搜索** | 中英日多语言语义搜索，覆盖 14,000+ 个工具 |
| ⚡ **快速匹配** | 回答 5 个问题 → 3 个精准推荐，按成本、匹配度、速度排序 |
| 📖 **全量目录** | 按分类浏览：视频、图像、编程、写作、音乐、Agent、CLI、MCP |
| 💸 **模型比价** | 400+ AI 模型价格横向对比（GPT-4、Claude、Gemini、Llama、DeepSeek 等） |
| 🎯 **场景方案** | 从 Reddit、知乎、Hacker News 提炼的真实工作流，带成本分析 |
| 🤖 **LingBot 助手** | AI 对话式工具推荐，25 个关键词自动触发 |
| 🌏 **12 种语言** | English / 中文 / Français / 日本語 / 한국어 / Tiếng Việt / Deutsch / Русский / العربية / हिन्दी / Indonesia / 繁體中文 |
| 🔄 **实时数据** | 每 10 分钟后端静默刷新，三级缓存保障 |

## 📊 数据规模

| 指标 | 数量 |
|------|------|
| 🛠️ 收录 AI 工具 | **14,475** |
| 🔎 可搜索工具 | **4,168** |
| 🧠 追踪 AI 模型 | **418** |
| 🏢 监控厂商 | **46** |
| 💰 最低模型输入价格 | **$0 / 百万 tokens** |

## 🚀 使用方式

1. 打开 **[madapexai.com](https://madapexai.com)**
2. 在搜索框输入你想做的事
3. 即时获取结果

### 搜索示例

| 你输入 | LingPick 找到 |
|--------|-------------|
| "做视频" | AI 视频工具、AIGC 视频创作、CogVideoX |
| "写代码" | 天工智码 Skycode、码上飞、Kimi K3 for Coding |
| "做PPT" | Dashi PPT、McKinsey PPT Design |
| "AI绘画" | 创客贴 AI 画匠、秒绘 AI、绘蛙 AI |
| "数据分析" | 研究数据分析工具集 |
| "make video" | Video Podcast Maker、Hailuo AI Video |
| "coding" | cli-llm-coding、Live Coding in Forth |

### LingBot 触发关键词

输入以下任意关键词自动唤起 AI 助手：
`客服` `人工客服` `help` `support` `联系客服` `售后` `技术支持` `帮助` `求助` `反馈` `投诉` `complaint`

## 🏗️ 技术架构

| 层级 | 技术栈 |
|------|--------|
| **前端** | React 18、Vite、TypeScript、i18next、Tailwind CSS |
| **搜索** | Fuse.js（关键词 + 向量混合搜索，threshold 0.35，品牌加权） |
| **后端** | Node.js、Express、PostgreSQL、PM2 |
| **缓存** | 三级缓存（HOT 5 分钟 / WARM 1 小时 / COLD 24 小时）+ 后台静默刷新 |
| **CI/CD** | GitHub Actions → Vercel（前端）+ Contabo PM2（后端） |
| **国际化** | 12 种语言翻译文件，en-US 兜底，动态 html[lang] |

## 🤝 参与贡献

- 📞 **[推荐工具](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — 我们漏掉了好工具？告诉我们。
- 🐛 **[报告问题](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 发现 bug？来反馈。
- 💡 **[功能建议](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — 有好的想法让 LingPick 更好用？
- 🌍 **[翻译改进](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 帮助我们完善你的语言版本。

## 🗣️ 社区

| 渠道 | 链接 |
|------|------|
| 💬 Discussions | [讨论区](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 网站 | [madapexai.com](https://madapexai.com) |
| 📧 邮件 | contact@madapexai.com |

## 📄 License

MIT License — 详见 [LICENSE](./LICENSE) 文件。

---

<p align="center">Made with 💚 for AI users everywhere</p>
