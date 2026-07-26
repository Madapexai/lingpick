[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Langues](https://img.shields.io/badge/Langues-12-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

# LingPick

<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" align="right" width="15%"/>

**Moteur de décision d'outils IA** — Arrêtez de payer trop cher pour les outils IA. Trouvez le moins cher qui fonctionne vraiment.

> **Le problème :** 50 onglets, 3 tableaux comparatifs, 2 heures — juste pour trouver un générateur vidéo qui ne coûte pas 30 $/mois.

> **Notre solution :** Dites-nous ce que vous voulez faire. Recevez 3 recommandations classées en 30 secondes. C'est tout.

```
Vous : "faire une vidéo explicative"
LingPick : → Video Podcast Maker (Gratuit)
           → Hailuo AI Video (4,99 $/mois)
           → CogVideoX 2.0 (Open Source)
```

→ Allez sur **[madapexai.com](https://madapexai.com)** pour essayer par vous-même.

---

## 🌐 Langues

| Language | Fichier |
|----------|---------|
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

## ✨ Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| 🔍 Recherche intelligente | Recherche sémantique multilingue parmi 14 000+ outils (chinois, anglais, japonais…) |
| ⚡ Correspondance rapide | Répondez à 5 questions → 3 recommandations classées par coût, pertinence et rapidité |
| 📖 Catalogue complet | Parcourez par catégorie : Vidéo, Image, Code, Écriture, Musique, Agent, CLI, MCP |
| 💸 Tarification des modèles | Comparez les prix de 400+ modèles IA (GPT-4, Claude, Gemini, Llama, DeepSeek…) |
| 🎯 Solutions par scénario | Workflows réels issus de Reddit, Zhihu, Hacker News — avec analyse coût-efficacité |
| 🤖 LingBot | Chatbot IA qui recommande des outils selon vos besoins. 25 mots-clés de déclenchement |
| 🌏 12 langues | English, 中文, Français, 日本語, 한국어, Tiếng Việt, Deutsch, Русский, العربية, हिन्दी, Indonesia, 繁體中文 |
| 🔄 Données en direct | Rafraîchissement toutes les 10 minutes, cache à trois niveaux (HOT/WARM/COLD) |

## 📊 En chiffres

| Métrique | Nombre |
|----------|--------|
| 🛠️ Outils IA indexés | **14 475** |
| 🔎 Outils consultables | **4 168** |
| 🧠 Modèles IA suivis | **418** |
| 🏢 Éditeurs surveillés | **46** |
| 💬 Chatbots répertoriés | **30** |
| ⌨️ Agents de code répertoriés | **32** |
| 💰 Entrée modèle la moins chère | **0 $ / 1M tokens** |
| 🆓 Outils avec offre gratuite | **91,6 %** |

## 🚀 Démarrage rapide

1. Allez sur **[madapexai.com](https://madapexai.com)**
2. Tapez ce que vous voulez faire dans la barre de recherche
3. Obtenez des résultats instantanément

### Exemples de recherche

| Vous tapez | LingPick trouve |
|------------|-----------------|
| "做视频" | Outil vidéo IA, Créateur vidéo AIGC, CogVideoX |
| "写代码" | SkyCode, CodeFly, Kimi K3 for Coding |
| "做PPT" | Dashi PPT, McKinsey PPT Design |
| "AI绘画" | Peintre IA, Miaohui AI, Huiwa AI |
| "数据分析" | Outils d'analyse de données de recherche |
| "make video" | Video Podcast Maker, Hailuo AI Video |
| "coding" | cli-llm-coding, Live Coding in Forth |

### Mots-clés de déclenchement LingBot

`客服` `help` `support` `contact` `customer service` `售后` `技术支持` `帮助` `反馈` `complaint`

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│                  Vercel CDN                   │
│           (React + Vite SPA)                  │
├─────────────────────────────────────────────┤
│  i18next (12 langues)  │  Fuse.js Hybride   │
├─────────────────────────────────────────────┤
│              Passerelle API REST              │
│          (Express + PostgreSQL)                │
├──────────┬──────────┬──────────┬─────────────┤
│ Recherche │ Catalogue │  Stats   │  LingBot    │
│  /agent   │  /models  │  /stats  │  /chat      │
├──────────┴──────────┴──────────┴─────────────┤
│       Cache 3 niveaux (HOT/WARM/COLD)        │
│    Rafraîchissement silencieux (10 min)      │
└─────────────────────────────────────────────┘
```

| Couche | Stack technique |
|--------|-----------------|
| **Frontend** | React 18, Vite, TypeScript, i18next, Tailwind CSS |
| **Recherche** | Fuse.js (hybride mots-clés + vecteurs, seuil 0.35, boost de marque) |
| **Backend** | Node.js, Express, PostgreSQL, PM2 |
| **Cache** | HOT (5 min) / WARM (1 h) / COLD (24 h), rafraîchissement silencieux |
| **CI/CD** | GitHub Actions → Vercel (frontend) + Contabo PM2 (backend) |
| **I18n** | 12 fichiers de traduction, fallback en-US, html[lang] dynamique |

## 🤝 Contribuer

- 📞 **[Suggérer un outil](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Un bon outil IA nous manque ? Dites-le nous.
- 🐛 **[Signaler un bug](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Vous avez trouvé un problème ? Faites-le nous savoir.
- 💡 **[Proposer une fonctionnalité](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — Une idée pour améliorer LingPick ?
- 🌍 **[Améliorer les traductions](https://github.com/Madapexai/lingpick/discussions/categories/general)** — Aidez-nous à localiser dans votre langue.

## 🗣️ Communauté

| Canal | Lien |
|-------|------|
| 💬 Discussions | [github.com/Madapexai/lingpick/discussions](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 Site web | [madapexai.com](https://madapexai.com) |
| 📧 Email | contact@madapexai.com |

## 📄 Licence

Ce dépôt est destiné à la documentation et aux discussions communautaires uniquement. Le code source de LingPick est propriétaire.

---

*Made with 💚 for AI users everywhere*
