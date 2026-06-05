# 👾 Arcnight Hackathon Landing Page

The official, premium **Retro Arcade** themed landing page for the **Arcnight Hackathon** (taking place June 13–14, 2026). This hackathon is hosted under the **Microcraft** series (a series of 10 events & 2 hackathons) by the **Microsoft Innovation Club (MIC)**.

The landing page features a nostalgic synthwave aesthetic, interactive elements, a real-time countdown, and official **Devfolio** integration for hacker registrations.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## ✨ Features

- 🕹️ **Retro Arcade Theme & Animations**:
  - Styled with a curated HSL violet, neon magenta, neon cyan, and amber color palette.
  - CRT screen scanline effects and an animated 3D perspective wireframe grid.
  - Glowing 8-bit text shadows configured globally.
- ⏳ **Digital Countdown**: A client-side countdown timer ticking down to the launch on **Saturday, June 13, 2026, at 10:00 AM**.
- 🪙 **Interactive Cabinet Console**: An interactive retro arcade cabinet. Clicking "INSERT COIN" transitions the console status and unlocks the **Apply with Devfolio** option inside the cabinet screen.
- 🏆 **Prizes Podium**: A retro podium layout displaying the reward breakdown:
  - 🥇 **Gold (Champion)**: ₹1,00,000 + Swag & Goodies
  - 🥈 **Silver (Runners Up)**: ₹60,000 + Swag & Goodies
  - 🥉 **Bronze (Second Runners Up)**: ₹40,000 + Swag & Goodies
- 🛡️ **Devfolio SDK Integration**: Integrates the official Devfolio script loader dynamically to ensure safe, secure, and compliant hacker registrations.
- 📅 **Quest Timeline**: A vertical schedule timeline laying out the checkpoints and sessions for Day 1 (June 13) and Day 2 (June 14).
- 🤝 **Visually Balanced Logos**: A mathematically balanced sponsors grid normalizing different logo aspects to the same visual footprint (~3500 sq px each) featuring **MIC**, **Microcraft**, **Google Gemini**, **HackerRank**, **XYZ**, and **Devfolio**.
- 📱 **Responsive & Accessible**: Optimized font scaling and high contrast for mobile and desktop screens using custom-loaded Google Fonts (`Press Start 2P` for titles, `VT323` for terminal logs, and `Inter` for prose).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (Turbopack)](https://nextjs.org/)
- **Libraries**: [React 19](https://react.dev/) & [next-themes](https://github.com/pacocoursey/next-themes)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI / Radix Primitives](https://ui.shadcn.com/)
- **Registration**: Official [Devfolio SDK v2](https://apply.devfolio.co/)
- **Fonts**: Google Fonts `Press Start 2P` and `VT323` via `next/font`

---

## 👥 Coordination & Contacts

For any queries regarding the hackathon, feel free to reach out to our coordinators listed at the footer:
- **Preeti (Faculty Coordinator)**
- **Tarang (Student Coordinator)**
