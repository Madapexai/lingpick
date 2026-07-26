[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmadapexai.com&label=LingPick&color=%234F46E5)](https://madapexai.com)
[![언어](https://img.shields.io/badge/언어-12개-4F46E5)](./README.md)
[![Discussions](https://img.shields.io/github/discussions/Madapexai/lingpick?color=%234F46E5)](https://github.com/Madapexai/lingpick/discussions)

<p align="center">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a+minimalist+flat+logo+for+LingPick%2C+an+AI+tool+decision+engine%2C+features+a+stylized+magnifying+glass+intersecting+with+circuit+patterns%2C+purple+and+blue+gradient%2C+clean+modern+design%2C+no+text&image_size=square" alt="LingPick" width="120" />
</p>

<h1 align="center">LingPick — AI 도구 결정 엔진</h1>
<p align="center">
  <strong>AI 도구 결정 엔진</strong><br>
  진짜 쓸만하고 저렴한 AI 도구를 찾아보세요.
</p>

<p align="center">
  <a href="https://madapexai.com">웹사이트</a> ·
  <a href="#-기능">기능</a> ·
  <a href="#-빠른-시작">사용법</a> ·
  <a href="#-아키텍처">아키텍처</a> ·
  <a href="https://github.com/Madapexai/lingpick/discussions">토론</a>
</p>

---

## 📖 언어

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

## 🎯 LingPick이란?

LingPick은 **AI 기반 도구 발견 플랫폼**으로, 최저 비용으로 가장 적합한 AI 도구를 찾을 수 있도록 도와줍니다. **14,000개 이상의 AI 도구**와 **400개 이상의 AI 모델**을 인덱싱하여, 더 이상 직접 하나하나 비교할 필요가 없습니다.

> **문제점:** 브라우저 탭 50개, 비교 표 3개, 2시간 소요 — 월 $30 미만의 동영상 생성기를 찾기 위해.

> **해결책:** 하고 싶은 일을 알려주세요. 30초 만에 비용 순으로 정렬된 3개의 추천을 받아보세요.

```
당신: "제품 소개 영상을 만들고 싶어요"
LingPick: → Video Podcast Maker (무료)
          → Hailuo AI Video ($4.99/월)
          → CogVideoX 2.0 (오픈소스)
```

## ✨ 기능

| 기능 | 설명 |
|------|------|
| 🔍 **스마트 검색** | 중/영/일 다국어 시맨틱 검색, 14,000개 이상의 도구 지원 |
| ⚡ **빠른 매칭** | 5개 질문에 답변 → 비용, 적합도, 속도 순으로 정렬된 3개의 정밀 추천 |
| 📖 **전체 카탈로그** | 카테고리별 탐색: 동영상, 이미지, 프로그래밍, 글쓰기, 음악, Agent, CLI, MCP |
| 💸 **모델 가격 비교** | 400개 이상 AI 모델 가격 비교 (GPT-4, Claude, Gemini, Llama, DeepSeek 등) |
| 🎯 **시나리오 솔루션** | Reddit, 즈후, Hacker News에서 추출한 실제 워크플로우, 비용 분석 포함 |
| 🤖 **LingBot 어시스턴트** | AI 대화형 도구 추천, 25개 키워드로 자동 실행 |
| 🌏 **12개 언어 지원** | English / 中文 / Français / 日本語 / 한국어 / Tiếng Việt / Deutsch / Русский / العربية / हिन्दी / Indonesia / 繁體中文 |
| 🔄 **실시간 데이터** | 10분마다 백엔드 자동 새로고침, 3계층 캐시 |

## 📊 데이터 규모

| 지표 | 수치 |
|------|------|
| 🛠️ 수록 AI 도구 | **14,475** |
| 🔎 검색 가능 도구 | **4,168** |
| 🧠 추적 AI 모델 | **418** |
| 🏢 모니터링 벤더 | **46** |
| 💰 최저 모델 입력 가격 | **$0 / 백만 토큰** |

## 🚀 빠른 시작

1. **[madapexai.com](https://madapexai.com)** 열기
2. 검색창에 하고 싶은 일 입력
3. 즉시 결과 확인

### 검색 예시

| 입력 | LingPick 검색 결과 |
|--------|-------------|
| "做视频" | AI 동영상 도구, AIGC 동영상 제작, CogVideoX |
| "写代码" | 天工智码 Skycode, 码上飞, Kimi K3 for Coding |
| "做PPT" | Dashi PPT, McKinsey PPT Design |
| "AI绘画" | 创客贴 AI 画匠, 秒绘 AI, 绘蛙 AI |
| "数据分析" | 연구 데이터 분석 도구 모음 |
| "make video" | Video Podcast Maker, Hailuo AI Video |
| "coding" | cli-llm-coding, Live Coding in Forth |

### LingBot 트리거 키워드

다음 키워드를 입력하면 AI 어시스턴트가 자동 실행됩니다:
`客服` `人工客服` `help` `support` `联系客服` `售后` `技术支持` `帮助` `求助` `反馈` `投诉` `complaint`

## 🏗️ 아키텍처

| 계층 | 기술 스택 |
|------|--------|
| **프론트엔드** | React 18, Vite, TypeScript, i18next, Tailwind CSS |
| **검색** | Fuse.js (키워드 + 벡터 하이브리드 검색, 임계값 0.35, 브랜드 가중치) |
| **백엔드** | Node.js, Express, PostgreSQL, PM2 |
| **캐시** | 3계층 캐시 (HOT 5분 / WARM 1시간 / COLD 24시간) + 백그라운드 자동 새로고침 |
| **CI/CD** | GitHub Actions → Vercel (프론트엔드) + Contabo PM2 (백엔드) |
| **국제화** | 12개 언어 번역 파일, en-US 폴백, 동적 html[lang] |

## 🤝 기여하기

- 📞 **[도구 추천](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — 좋은 도구를 놓쳤나요? 알려주세요.
- 🐛 **[버그 신고](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 버그를 발견하셨나요? 제보해 주세요.
- 💡 **[기능 제안](https://github.com/Madapexai/lingpick/discussions/categories/ideas)** — LingPick을 더 좋게 만들 아이디어가 있나요?
- 🌍 **[번역 개선](https://github.com/Madapexai/lingpick/discussions/categories/general)** — 귀하의 언어 번역을 개선하는 데 도움을 주세요.

## 🗣️ 커뮤니티

| 채널 | 링크 |
|------|------|
| 💬 Discussions | [토론 게시판](https://github.com/Madapexai/lingpick/discussions) |
| 🌐 웹사이트 | [madapexai.com](https://madapexai.com) |
| 📧 이메일 | contact@madapexai.com |

## 📄 라이선스

MIT 라이선스 — 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

---

<p align="center">Made with 💚 for AI users everywhere</p>
