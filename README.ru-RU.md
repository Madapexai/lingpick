[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Языки](https://img.shields.io/badge/Языки-12-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

# LingPick

<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" align="right" width="15%"/>

**Движок выбора ИИ-инструментов** — Перестаньте переплачивать за ИИ-инструменты. Найдите самый дешёвый, который действительно работает.

> **Проблема:** 50 вкладок браузера, 3 сравнительные таблицы, 2 часа — только чтобы найти видеогенератор, который не стоит $30/мес.

> **Решение:** Напишите, что хотите сделать. Получите 3 рекомендации за 30 секунд. Готово.

```
Вы: "сделать пояснительное видео"
LingPick: → Video Podcast Maker (Бесплатно)
          → Hailuo AI Video ($4.99/мес)
          → CogVideoX 2.0 (Открытый исходный код)
```

→ Перейдите на **[madapexai.com](https://madapexai.com)**, чтобы попробовать сами.

---

## 🌐 Языки

| Language | Файл |
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

## ✨ Возможности

| Возможность | Описание |
|-------------|----------|
| 🔍 Умный поиск | Семантический поиск по 14 000+ инструментов на китайском, английском, японском и других языках |
| ⚡ Быстрый подбор | Ответьте на 5 вопросов → 3 персональные рекомендации, ранжированные по стоимости, соответствию и скорости |
| 📖 Полный каталог | Просмотр по категориям: Видео, Изображения, Код, Текст, Музыка, Agent, CLI, MCP |
| 💸 Цены на модели | Сравните цены 400+ ИИ-моделей (GPT-4, Claude, Gemini, Llama, DeepSeek…) |
| 🎯 Сценарные решения | Отобранные рабочие процессы из Reddit, Zhihu, Hacker News — с анализом затрат |
| 🤖 LingBot | ИИ-чатбот, рекомендующий инструменты под ваши задачи. 25 ключевых слов-триггеров |
| 🌏 12 языков | English, 中文, Français, 日本語, 한국어, Tiếng Việt, Deutsch, Русский, العربية, हिन्दी, Indonesia, 繁體中文 |
| 🔄 Живые данные | Фоновое обновление каждые 10 минут, трёхуровневый кеш (HOT/WARM/COLD) |

## 📊 В цифрах

| Показатель | Значение |
|------------|----------|
| 🛠️ Проиндексировано ИИ-инструментов | **14 475** |
| 🔎 Доступно для поиска | **4 168** |
| 🧠 Отслеживается ИИ-моделей | **418** |
| 🏢 Мониторится поставщиков | **46** |
| 💬 Чат-ботов в каталоге | **30** |
| ⌨️ Кодовых агентов в каталоге | **32** |
| 💰 Самая дешёвая цена ввода | **$0 / 1M токенов** |
| 🆓 Инструментов с бесплатным тарифом | **91,6%** |

## 🚀 Быстрый старт

1. Перейдите на **[madapexai.com](https://madapexai.com)**
2. Введите в строку поиска, что хотите сделать
3. Мгновенно получите результаты

### Примеры поиска

| Вы вводите | LingPick находит |
|------------|------------------|
| "做视频" | ИИ-видеоинструмент, AIGC Video Creator, CogVideoX |
| "写代码" | SkyCode, CodeFly, Kimi K3 for Coding |
| "做PPT" | Dashi PPT, McKinsey PPT Design |
| "AI绘画" | ИИ-художник, Miaohui AI, Huiwa AI |
| "数据分析" | Инструменты анализа данных исследований |
| "make video" | Video Podcast Maker, Hailuo AI Video |
| "coding" | cli-llm-coding, Live Coding in Forth |

### Ключевые слова-триггеры LingBot

`客服` `help` `support` `contact` `customer service` `售后` `技术支持` `帮助` `反馈` `complaint`

## 🏗️ Архитектура

```
┌─────────────────────────────────────────────┐
│                  Vercel CDN                   │
│           (React + Vite SPA)                  │
├─────────────────────────────────────────────┤
│  i18next (12 языков)  │  Fuse.js Гибридный  │
├─────────────────────────────────────────────┤
│              Шлюз REST API                    │
│          (Express + PostgreSQL)                │
├──────────┬──────────┬──────────┬─────────────┤
│  Поиск    │  Каталог  │ Статистика│  LingBot   │
│  /agent   │  /models  │  /stats  │  /chat      │
├──────────┴──────────┴──────────┴─────────────┤
│   Трёхуровневый кеш (HOT/WARM/COLD)        │
│  Фоновое обновление (цикл 10 минут)         │
└─────────────────────────────────────────────┘
```

| Слой | Технологический стек |
|------|----------------------|
| **Фронтенд** | React 18, Vite, TypeScript, i18next, Tailwind CSS |
| **Поиск** | Fuse.js (ключевые слова + векторный гибрид, порог 0.35, брендовый буст) |
| **Бэкенд** | Node.js, Express, PostgreSQL, PM2 |
| **Кеширование** | HOT (5 мин) / WARM (1 ч) / COLD (24 ч), фоновое обновление |
| **CI/CD** | GitHub Actions → Vercel (фронтенд) + Contabo PM2 (бэкенд) |
| **I18n** | 12 файлов перевода, резерв en-US, динамический html[lang] |

## 🤝 Участие

- 📞 **[Предложить инструмент](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Знаете хороший ИИ-инструмент, которого у нас нет? Сообщите нам.
- 🐛 **[Сообщить об ошибке](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Нашли проблему? Дайте нам знать.
- 💡 **[Предложить функцию](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Есть идея, как улучшить LingPick?
- 🌍 **[Улучшить перевод](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Помогите нам с локализацией на ваш язык.

## 🗣️ Сообщество

| Канал | Ссылка |
|-------|--------|
| 💬 Обсуждения | [github.com/Madapexai/lingpick/discussions](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 Сайт | [madapexai.com](https://madapexai.com) |
| 📧 Email | contact@madapexai.com |

## 📄 Лицензия

Этот репозиторий предназначен только для документации и обсуждений сообщества. Исходный код LingPick является проприетарным.

---

*Made with 💚 for AI users everywhere*
