[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Sprachen](https://img.shields.io/badge/Sprachen-12-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

# LingPick

<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" align="right" width="15%"/>

**KI-Tool-Entscheidungsmaschine** — Hören Sie auf, für KI-Tools zu viel zu bezahlen. Finden Sie das günstigste, das wirklich funktioniert.

> **Das Problem:** 50 Browser-Tabs, 3 Vergleichstabellen, 2 Stunden — nur um einen Video-Generator zu finden, der keine 30 $/Monat kostet.

> **Unsere Lösung:** Geben Sie ein, was Sie tun möchten. Erhalten Sie in 30 Sekunden 3 bewertete Empfehlungen. Fertig.

```
Sie: "ein Erklärvideo erstellen"
LingPick: → Video Podcast Maker (Kostenlos)
          → Hailuo AI Video (4,99 $/Monat)
          → CogVideoX 2.0 (Open Source)
```

→ Gehen Sie zu **[madapexai.com](https://madapexai.com)**, um es selbst auszuprobieren.

---

## 🌐 Sprachen

| Language | Datei |
|----------|-------|
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

## ✨ Funktionen

| Funktion | Beschreibung |
|----------|--------------|
| 🔍 Intelligente Suche | Semantische Suche in über 14.000 Tools (Chinesisch, Englisch, Japanisch uvm.) |
| ⚡ Schnellabgleich | 5 Fragen beantworten → 3 personalisierte Empfehlungen nach Kosten, Passung und Geschwindigkeit |
| 📖 Vollständiger Katalog | Nach Kategorie durchsuchen: Video, Bild, Code, Text, Musik, Agent, CLI, MCP |
| 💸 Modellpreise | Über 400 KI-Modellpreise im Vergleich (GPT-4, Claude, Gemini, Llama, DeepSeek…) |
| 🎯 Szenariolösungen | Kuratierte Workflows von Reddit, Zhihu, Hacker News — mit Kosten-Nutzen-Analyse |
| 🤖 LingBot | KI-Chatbot, der Tools basierend auf Ihren Bedürfnissen empfiehlt. 25 Trigger-Schlüsselwörter |
| 🌏 12 Sprachen | English, 中文, Français, 日本語, 한국어, Tiếng Việt, Deutsch, Русский, العربية, हिन्दी, Indonesia, 繁體中文 |
| 🔄 Live-Daten | Hintergrundaktualisierung alle 10 Minuten, dreistufiger Cache (HOT/WARM/COLD) |

## 📊 In Zahlen

| Metrik | Anzahl |
|--------|--------|
| 🛠️ Indizierte KI-Tools | **14.475** |
| 🔎 Durchsuchbare Tools | **4.168** |
| 🧠 Verfolgte KI-Modelle | **418** |
| 🏢 Überwachte Anbieter | **46** |
| 💬 Gelistete Chatbots | **30** |
| ⌨️ Gelistete Code-Agenten | **32** |
| 💰 Günstigster Model-Input | **0 $ / 1M Tokens** |
| 🆓 Tools mit kostenlosem Tarif | **91,6 %** |

## 🚀 Schnellstart

1. Gehen Sie zu **[madapexai.com](https://madapexai.com)**
2. Geben Sie in die Suchleiste ein, was Sie tun möchten
3. Erhalten Sie sofort Ergebnisse

### Suchbeispiele

| Sie geben ein | LingPick findet |
|---------------|-----------------|
| "做视频" | KI-Video-Tool, AIGC-Video-Creator, CogVideoX |
| "写代码" | SkyCode, CodeFly, Kimi K3 for Coding |
| "做PPT" | Dashi PPT, McKinsey PPT Design |
| "AI绘画" | KI-Maler, Miaohui AI, Huiwa AI |
| "数据分析" | Forschungs-Datenanalyse-Tools |
| "make video" | Video Podcast Maker, Hailuo AI Video |
| "coding" | cli-llm-coding, Live Coding in Forth |

### LingBot Trigger-Schlüsselwörter

`客服` `help` `support` `contact` `customer service` `售后` `技术支持` `帮助` `反馈` `complaint`

## 🏗️ Architektur

```
┌─────────────────────────────────────────────┐
│                  Vercel CDN                   │
│           (React + Vite SPA)                  │
├─────────────────────────────────────────────┤
│  i18next (12 Sprachen)  │  Fuse.js Hybrid   │
├─────────────────────────────────────────────┤
│              REST-API-Gateway                 │
│          (Express + PostgreSQL)                │
├──────────┬──────────┬──────────┬─────────────┤
│   Suche   │  Katalog  │  Statistiken│ LingBot  │
│  /agent   │  /models  │  /stats  │  /chat      │
├──────────┴──────────┴──────────┴─────────────┤
│     Dreistufiger Cache (HOT/WARM/COLD)      │
│   Hintergrundaktualisierung (10-Min.-Zyklus) │
└─────────────────────────────────────────────┘
```

| Schicht | Technologie-Stack |
|---------|-------------------|
| **Frontend** | React 18, Vite, TypeScript, i18next, Tailwind CSS |
| **Suche** | Fuse.js (Keyword + Vektor Hybrid, Schwellenwert 0.35, Marken-Boost) |
| **Backend** | Node.js, Express, PostgreSQL, PM2 |
| **Caching** | HOT (5 Min.) / WARM (1 Std.) / COLD (24 Std.), stille Hintergrundaktualisierung |
| **CI/CD** | GitHub Actions → Vercel (Frontend) + Contabo PM2 (Backend) |
| **I18n** | 12 Übersetzungsdateien, en-US-Fallback, dynamisches html[lang] |

## 🤝 Mitwirken

- 📞 **[Tool vorschlagen](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Fehlt ein gutes KI-Tool? Sagen Sie es uns.
- 🐛 **[Fehler melden](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Einen Fehler gefunden? Lassen Sie es uns wissen.
- 💡 **[Funktion vorschlagen](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Eine Idee, um LingPick zu verbessern?
- 🌍 **[Übersetzungen verbessern](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Helfen Sie uns bei der Lokalisierung in Ihre Sprache.

## 🗣️ Community

| Kanal | Link |
|-------|------|
| 💬 Diskussionen | [github.com/Madapexai/lingpick/discussions](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 Website | [madapexai.com](https://madapexai.com) |
| 📧 E-Mail | contact@madapexai.com |

## 📄 Lizenz

Dieses Repository dient nur der Dokumentation und Community-Diskussion. Der LingPick-Quellcode ist proprietär.

---

*Made with 💚 for AI users everywhere*
