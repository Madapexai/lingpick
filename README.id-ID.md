[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Languages](https://img.shields.io/badge/Bahasa-12-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

# LingPick

<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" align="right" width="15%"/>

**Mesin Pengambil Keputusan Alat AI** — Berhenti membayar terlalu mahal untuk alat AI. Temukan yang termurah yang benar-benar berfungsi.

> **Masalah:** 50 tab browser, 3 lembar perbandingan, 2 jam — hanya untuk mencari pembuat video yang tidak seharga $30/bulan.

> **Solusi Kami:** Ketik apa yang ingin Anda lakukan. Dapatkan 3 rekomendasi terurut dalam 30 detik. Selesai.

```
Anda: "buat video penjelasan"
LingPick: → Video Podcast Maker (Gratis)
          → Hailuo AI Video ($4.99/bulan)
          → CogVideoX 2.0 (Open Source)
```

→ Kunjungi **[madapexai.com](https://madapexai.com)** untuk mencobanya sendiri.

---

## 🌐 Bahasa

| Language | Berkas |
|----------|--------|
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

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 🔍 Pencarian Cerdas | Pencarian semantik multibahasa di 14.000+ alat (Tionghoa, Inggris, Jepang, dan lainnya) |
| ⚡ Pencocokan Cepat | Jawab 5 pertanyaan → 3 rekomendasi personal diurutkan berdasarkan biaya, kecocokan, dan kecepatan |
| 📖 Katalog Lengkap | Jelajahi berdasarkan kategori: Video, Gambar, Kode, Menulis, Musik, Agent, CLI, MCP |
| 💸 Harga Model | Bandingkan harga 400+ model AI secara berdampingan (GPT-4, Claude, Gemini, Llama, DeepSeek…) |
| 🎯 Solusi Skenario | Alur kerja terkurasi dari Reddit, Zhihu, Hacker News — dengan analisis biaya dan efek |
| 🤖 LingBot | Chatbot AI yang merekomendasikan alat berdasarkan kebutuhan Anda. 25 kata kunci pemicu |
| 🌏 12 Bahasa | English, 中文, Français, 日本語, 한국어, Tiếng Việt, Deutsch, Русский, العربية, हिन्दी, Indonesia, 繁體中文 |
| 🔄 Data Langsung | Penyegaran latar belakang setiap 10 menit, cache tiga tingkat (HOT/WARM/COLD) |

## 📊 Dalam Angka

| Metrik | Jumlah |
|--------|--------|
| 🛠️ Alat AI terindeks | **14.475** |
| 🔎 Alat yang dapat dicari | **4.168** |
| 🧠 Model AI dilacak | **418** |
| 🏢 Vendor dipantau | **46** |
| 💬 Chatbot terdaftar | **30** |
| ⌨️ Code Agent terdaftar | **32** |
| 💰 Harga input model termurah | **$0 / 1M token** |
| 🆓 Alat dengan paket gratis | **91,6%** |

## 🚀 Mulai Cepat

1. Kunjungi **[madapexai.com](https://madapexai.com)**
2. Ketik apa yang ingin Anda lakukan di kotak pencarian
3. Dapatkan hasil secara instan

### Contoh Pencarian

| Anda mengetik | LingPick menemukan |
|---------------|-------------------|
| "做视频" | Alat Video AI, Pembuat Video AIGC, CogVideoX |
| "写代码" | SkyCode, CodeFly, Kimi K3 for Coding |
| "做PPT" | Dashi PPT, McKinsey PPT Design |
| "AI绘画" | Pelukis AI, Miaohui AI, Huiwa AI |
| "数据分析" | Alat Analisis Data Penelitian |
| "make video" | Video Podcast Maker, Hailuo AI Video |
| "coding" | cli-llm-coding, Live Coding in Forth |

### Kata Kunci Pemicu LingBot

`客服` `help` `support` `contact` `customer service` `售后` `技术支持` `帮助` `反馈` `complaint`

## 🏗️ Arsitektur

```
┌─────────────────────────────────────────────┐
│                  Vercel CDN                   │
│           (React + Vite SPA)                  │
├─────────────────────────────────────────────┤
│  i18next (12 bahasa)  │  Fuse.js Hibrida    │
├─────────────────────────────────────────────┤
│              Gateway REST API                 │
│          (Express + PostgreSQL)                │
├──────────┬──────────┬──────────┬─────────────┤
│  Pencarian │  Katalog  │  Statistik │  LingBot  │
│  /agent   │  /models  │  /stats  │  /chat      │
├──────────┴──────────┴──────────┴─────────────┤
│     Cache 3 Tingkat (HOT/WARM/COLD)         │
│   Penyegaran Latar (siklus 10 menit)        │
└─────────────────────────────────────────────┘
```

| Lapisan | Stack Teknologi |
|---------|-----------------|
| **Frontend** | React 18, Vite, TypeScript, i18next, Tailwind CSS |
| **Pencarian** | Fuse.js (hibrida kata kunci + vektor, ambang 0.35, peningkatan merek) |
| **Backend** | Node.js, Express, PostgreSQL, PM2 |
| **Cache** | HOT (5 menit) / WARM (1 jam) / COLD (24 jam), penyegaran latar senyap |
| **CI/CD** | GitHub Actions → Vercel (frontend) + Contabo PM2 (backend) |
| **I18n** | 12 berkas terjemahan, fallback en-US, html[lang] dinamis |

## 🤝 Berkontribusi

- 📞 **[Sarankan alat](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Tahu alat AI hebat yang kami lewatkan? Beri tahu kami.
- 🐛 **[Laporkan bug](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Menemukan sesuatu yang rusak? Beri tahu kami.
- 💡 **[Usulkan fitur](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Punya ide untuk membuat LingPick lebih baik?
- 🌍 **[Tingkatkan terjemahan](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Bantu kami melokalkan ke bahasa Anda.

## 🗣️ Komunitas

| Saluran | Tautan |
|---------|--------|
| 💬 Diskusi | [github.com/Madapexai/lingpick/discussions](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 Situs Web | [madapexai.com](https://madapexai.com) |
| 📧 Email | contact@madapexai.com |

## 📄 Lisensi

Repositori ini hanya untuk dokumentasi dan diskusi komunitas. Kode sumber LingPick adalah proprietary.

---

*Made with 💚 for AI users everywhere*
