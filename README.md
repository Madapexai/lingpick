# LingPick — AI Tool Decision Engine

> Stop overpaying for AI tools. Find the cheapest one that actually works.

LingPick 是一个 **AI 工具决策引擎**，帮你用最低成本找到真正好用的 AI 工具。不再纠结 50 个标签页对比，30 秒拿到精准推荐。

---

## 是什么？

LingPick 是一个 AI 工具发现与推荐平台，覆盖 **14,000+** AI 工具和 **418+** AI 模型。我们做三件事：

1. **智能匹配** — 告诉我们你想做什么，30 秒内拿到按成本、匹配度、速度排序的推荐
2. **全量目录** — 浏览覆盖视频生成、图像创作、编程开发、写作助手等 12 大类工具
3. **场景化解决方案** — 从 Reddit、知乎、Hacker News 提炼社区痛点，打包成带成本分析的工作流

## 有什么用？

### 对普通用户
- ✨ **省钱** — 每个推荐都按成本排序：Free > Freemium > Affordable > Premium，告诉你真实月费
- 🚨 **省时** — 不再需要开 50 个标签页对比，直接拿到 3 个精选 + 一句话理由
- 🧠 **省心** — 从社区真实使用场景出发，给的是解决方案而不是工具列表

### 对开发者
- 🔎 **搜索 API** — 14,000+ 工具的语义搜索接口，支持中英文查询
- 🧩 **MCP / CLI / Skills 目录** — 发现 MCP Server、CLI 工具、AI Skills
- 📊 **模型比价** — 418 个 AI 模型的输入/输出价格对比，最低 $0/1M tokens

### 对企业
- 💰 **成本优化** — AI 工具开支分析，找到更便宜的替代方案
- 👥 **LingBot 智能客服** — AI 驱动的工具咨询，帮用户快速决策

## 核心功能

| 功能 | 说明 |
|------|------|
| 🔍 **智能搜索** | 中英文语义搜索，支持 95+ 场景关键词扩展，品牌加权 |
| ⚡ **快速匹配** | 30 秒问答式推荐，按成本/匹配度/速度排序 |
| 📖 **全量浏览** | 14,000+ 工具分类浏览，支持多维度筛选 |
| 💸 **价格对比** | AI 模型输入/输出价格实时对比，含免费层标记 |
| 🤖 **LingBot** | 智能客服导流，25 个关键词触发，三通道无缝接入 |
| 🌐 **多语言** | 支持 12 种语言：英语/中文/法语/日语/韩语/越南语/德语/俄语/阿拉伯语/印地语/印尼语/繁体中文 |
| 🔄 **实时数据** | 后台 10 分钟静默刷新，三级缓存（HOT/WARM/COLD） |

## 数据规模

| 指标 | 数量 |
|------|------|
| AI 工具 | 14,475（可搜索 4,168）|
| AI 模型 | 418（含定价 383）|
| 厂商 | 46（官方 29 + 中转 17）|
| Chatbot | 30（Freemium 26 + Free 3）|
| Code Agent | 32（IDE 21 + CLI 11）|
| 最低输入价格 | $0 / 1M tokens |
| 最低输出价格 | $0 / 1M tokens |

## 使用方式

### 在线使用

访问 LingPick 网站，直接开始搜索或浏览：

- 🔍 **搜索** — 在首页输入框输入你想做的事（如"做视频""写代码""generate logo"）
- ⚡ **快速匹配** — 点击 "Quick Match"，回答几个问题，30 秒拿到推荐
- 📖 **浏览目录** — 点击 "Browse" 查看全量工具，按类别/价格/评分筛选
- 💸 **模型比价** — 点击 "Catalog" 查看 AI 模型价格对比

### 搜索示例

| 查询 | 返回结果示例 |
|------|-------------|
| 品做视频 | AI视频工具 / AIGC视频创作 / CogVideoX |
| 写代码 | 天工智码Skycode / 码上飞 / Kimi K3 for Coding |
| make video | Video Podcast Maker / Hailuo AI Video / CogVideoX 2.0 |
| coding | cli-llm-coding / Live Coding in Forth |
| generate logo | Logomaster.ai |
| transcribe meeting | Fathom / tl;dv / Fireflies.ai |

### LingBot 智能客服

在搜索框输入以下关键词会自动触发 LingBot 客服导流：

> 客服 / 人工客服 / help / support / contact / customer service / 售后 / 技术支持 / 帮助 / 反馈

## 技术架构

- **前端**: React + Vite + TypeScript + i18next（12 语言）
- **后端**: Node.js + Express + PostgreSQL
- **搜索**: Fuse.js 混合搜索（关键词 + 向量），threshold=0.35，品牌加权
- **缓存**: 三级缓存（HOT 5min / WARM 1h / COLD 24h）+ 后台 10min 静默刷新
- **部署**: Vercel（前端）+ Contabo PM2（后端）+ GitHub Actions CI/CD

## 参与讨论

💬 **[GitHub Discussions](https://github.com/Madapexai/lingpick/discussions)** — 欢迎在这里：

- 📞 提出你想要的 AI 工具推荐场景
- 💻 分享你发现的便宜好用的 AI 工具
- 💡 建议新功能或改进
- 👁️ 反馈使用中遇到的问题

## 联系我们

- 🌐 Website: [LingPick](https://madapexai.com)
- 📧 Email: contact@madapexai.com
- 🤖 LingBot: 网站右下角点击即可对话

---

<p align="center">Made with 💚 for AI users</p>
