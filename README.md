# Airline IATA Match

A lightweight browser game that challenges you to match real airlines with their 2-letter IATA codes. The app runs entirely in the browser and keeps a persistent leaderboard in `localStorage`, so you can simply open `index.html` to start playing.

## Features
- 150+ real airline / IATA pairs stored locally in `data/airlines.json` (validated to ensure 2-letter codes).
- 10-question sessions with a 10-second timer (Easy +2s, Hard -2s), +10 points per correct answer, and up to +5 speed bonus based on remaining time.
- Difficulty-aware wrong answers (Hard prefers visually similar codes).
- No repeated airlines within a session.
- Final results show score, accuracy, and average response time.
- Persistent top scores stored locally with player email, score, and accuracy. Clear the leaderboard with one click.

## Running the game
This project is frontend-only. You can run it either by double-clicking `index.html` or with a tiny local server if your browser blocks `file://` fetches.

### Option A: Open the file directly
1. Open `index.html` in your browser.
2. If your browser blocks loading `data/airlines.json` via `file://`, the game will automatically fall back to the embedded dataset and show a small notice.

### Option B: Serve locally (optional)
If you prefer using `http://localhost` to avoid any local file restrictions:

```bash
# From the repo root
python -m http.server 8000
# Then open http://localhost:8000
```

## How to play
1. On the start screen, enter your name and email, pick a difficulty, and press **Start Game**.
2. For each question, pick the correct IATA code before the timer hits zero. Wrong answers and timeouts score 0.
3. After 10 questions, view your score, accuracy, and average response time. The leaderboard updates automatically.

## Files
- `index.html` – UI structure for start, game, end screens, and leaderboard.
- `styles.css` – Responsive styling for desktop and mobile.
- `app.js` – Game logic, timers, scoring, validation, and leaderboard persistence.
- `data/airlines.json` – Airline dataset (2-letter IATA codes), also embedded as a fallback for offline loading.

## Notes on data quality
- The dataset is validated at load time to ensure each IATA code is exactly two letters. Invalid or duplicate codes are discarded before play.
- Wrong options are guaranteed to be real codes, non-duplicated, and never the correct answer.

Enjoy the challenge!
