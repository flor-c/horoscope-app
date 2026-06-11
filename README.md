# ☽ Horoscope App

A minimal horoscope app built with React and Vite. Enter your date of birth and get a short, sharp reading powered by an LLM.

![Horoscope App](https://raw.githubusercontent.com/flor-c/horoscope-app/main/src/assets/hero.png)

## Features

- Zodiac sign detection from date of birth
- AI-generated readings via [Groq](https://console.groq.com) (free tier)
- Dark tarot-inspired UI with frosted glass card
- Fully client-side — no backend required

## Tech Stack

- [React 19](https://react.dev) + [Vite 8](https://vite.dev)
- Plain CSS (no frameworks)
- [Groq API](https://console.groq.com) — Llama 3.1 8B

## Getting Started

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/flor-c/horoscope-app.git
cd horoscope-app
npm install
```

2. Create a `.env` file in the root:

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

Get a free API key at [console.groq.com](https://console.groq.com).

3. Start the dev server:

```bash
npm run dev
```

## Deployment

Deployed on [Vercel](https://vercel.com). To deploy your own:

1. Import the repo in Vercel
2. Add `VITE_GROQ_API_KEY` as an environment variable
3. Deploy — Vercel detects Vite automatically
