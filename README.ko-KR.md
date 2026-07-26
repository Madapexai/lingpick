[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![Languages](https://img.shields.io/badge/언어-12개-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

# LingPick

<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" align="right" width="15%"/>

**AI 도구 결정 엔진** — AI 도구에 과도한 비용을 지불하지 마세요. 실제로 작동하는 가장 저렴한 도구를 찾으세요.

> **문제점:** 50개의 브라우저 탭, 3개의 비교 표, 2시간의 조사 — 월 $30가 안 드는 영상 생성 도구 하나 찾자고.

> **해결책:** 하고 싶은 일을 입력하세요. 30초 안에 비용 순으로 정렬된 3개의 추천을 받으세요.

```
당신: "설명 영상을 만들고 싶어요"
LingPick: → Video Podcast Maker (무료)
          → Hailuo AI Video ($4.99/월)
          → CogVideoX 2.0 (오픈소스)
```

→ **[madapexai.com](https://madapexai.com)** 에서 직접 사용해 보세요.

---

## 🌐 언어

| Language | 파일 |
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

## ✨ 기능

| 기능 | 설명 |
|------|------|
| 🔍 스마트 검색 | 중국어, 영어, 일본어 등 다국어 의미 기반 검색, 14,000개 이상의 도구 커버 |
| ⚡ 빠른 매칭 | 5개 질문에 답변 → 비용, 적합도, 속도 순으로 정렬된 3개의 맞춤 추천 |
| 📖 전체 카탈로그 | 카테고리별 탐색: 영상, 이미지, 코드, 글쓰기, 음악, Agent, CLI, MCP |
| 💸 모델 가격 비교 | 400개 이상의 AI 모델 가격을 나란히 비교 (GPT-4, Claude, Gemini, Llama, DeepSeek…) |
| 🎯 시나리오 솔루션 | Reddit, 즈후(Zhihu), Hacker News에서 엄선한 실제 워크플로우, 비용 분석 포함 |
| 🤖 LingBot | 필요에 따라 도구를 추천하는 AI 챗봇. 25개의 트리거 키워드 |
| 🌏 12개 언어 | English, 中文, Français, 日本語, 한국어, Tiếng Việt, Deutsch, Русский, العربية, हिन्दी, Indonesia, 繁體中文 |
| 🔄 실시간 데이터 | 10분마다 백그라운드 갱신, 3단계 캐시 (HOT/WARM/COLD) |

## 📊 숫자로 보기

| 지표 | 수치 |
|------|------|
| 🛠️ 인덱싱된 AI 도구 | **14,475** |
| 🔎 검색 가능 도구 | **4,168** |
| 🧠 추적 중인 AI 모델 | **418** |
| 🏢 모니터링 중인 벤더 | **46** |
| 💬 등록된 챗봇 | **30** |
| ⌨️ 등록된 코드 에이전트 | **32** |
| 💰 최저 모델 입력 가격 | **$0 / 100만 토큰** |
| 🆓 무료 요금제 제공 도구 | **91.6%** |

## 🚀 빠른 시작

1. **[madapexai.com](https://madapexai.com)** 에 접속
2. 검색창에 하고 싶은 일을 입력
3. 즉시 결과 확인

### 검색 예시

| 입력 | LingPick이 찾은 결과 |
|------|---------------------|
| "做视频" | AI 영상 도구, AIGC 영상 제작기, CogVideoX |
| "写代码" | SkyCode, CodeFly, Kimi K3 for Coding |
| "做PPT" | Dashi PPT, McKinsey PPT Design |
| "AI绘画" | AI 페인터, Miaohui AI, Huiwa AI |
| "数据分析" | 연구 데이터 분석 도구 |
| "make video" | Video Podcast Maker, Hailuo AI Video |
| "coding" | cli-llm-coding, Live Coding in Forth |

### LingBot 트리거 키워드

`客服` `help` `support` `contact` `customer service` `售后` `技术支持` `帮助` `反馈` `complaint`

## 🏗️ 아키텍처

```
┌─────────────────────────────────────────────┐
│                  Vercel CDN                   │
│           (React + Vite SPA)                  │
├─────────────────────────────────────────────┤
│  i18next (12개 언어)  │  Fuse.js 하이브리드 │
├─────────────────────────────────────────────┤
│              REST API 게이트웨이               │
│          (Express + PostgreSQL)                │
├──────────┬──────────┬──────────┬─────────────┤
│   검색    │  카탈로그  │   통계    │  LingBot    │
│  /agent   │  /models  │  /stats  │  /chat      │
├──────────┴──────────┴──────────┴─────────────┤
│     3단계 캐시 (HOT/WARM/COLD)             │
│    백그라운드 갱신 (10분 주기)              │
└─────────────────────────────────────────────┘
```

| 계층 | 기술 스택 |
|------|----------|
| **프론트엔드** | React 18, Vite, TypeScript, i18next, Tailwind CSS |
| **검색** | Fuse.js (키워드 + 벡터 하이브리드, 임계값 0.35, 브랜드 부스트) |
| **백엔드** | Node.js, Express, PostgreSQL, PM2 |
| **캐싱** | HOT (5분) / WARM (1시간) / COLD (24시간), 백그라운드 갱신 |
| **CI/CD** | GitHub Actions → Vercel (프론트엔드) + Contabo PM2 (백엔드) |
| **국제화** | 12개 언어 번역 파일, en-US 폴백, 동적 html[lang] |

## 🤝 기여하기

- 📞 **[도구 제안](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — 빠진 좋은 AI 도구가 있나요? 알려주세요.
- 🐛 **[버그 신고](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 문제를 발견하셨나요? 알려주세요.
- 💡 **[기능 제안](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — LingPick을 더 좋게 만들 아이디어가 있나요?
- 🌍 **[번역 개선](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 귀하의 언어로 현지화하는 데 도움을 주세요.

## 🗣️ 커뮤니티

| 채널 | 링크 |
|------|------|
| 💬 토론 | [github.com/Madapexai/lingpick/discussions](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 웹사이트 | [madapexai.com](https://madapexai.com) |
| 📧 이메일 | contact@madapexai.com |

## 📄 라이선스

이 저장소는 문서화 및 커뮤니티 토론 전용입니다. LingPick 소스 코드는 독점 소프트웨어입니다.

---

*Made with 💚 for AI users everywhere*
