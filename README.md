# Hariom Thakur — Portfolio Website 🚀

A full-stack portfolio website built with the **MERN Stack** (MongoDB, Express, React, Node.js).

## Features
- 🎨 Custom particle canvas hero with typewriter animation
- ⚡ Animated skill bars with scroll reveal
- 📋 Filterable project cards with expand-for-details
- 📅 Interactive coding journey timeline
- 📬 Functional contact form (saved to MongoDB + optional email via Nodemailer)
- 🌙 Premium dark theme with glassmorphism cards
- 🖱️ Custom animated cursor
- 📱 Fully responsive

## Project Structure

```
hariom-portfolio/
├── client/          # React + Vite frontend
│   ├── src/
│   │   ├── components/   # All React components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css     # Global design system
│   ├── public/
│   └── package.json
└── server/          # Node.js + Express backend
    ├── routes/
    │   └── contact.js
    ├── models/
    │   └── Contact.js
    ├── index.js
    ├── .env
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js v18+ installed
- MongoDB running locally OR a MongoDB Atlas URI

### 1. Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 2. Configure Environment

Edit `server/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:5173
```

### 3. Run the App

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```

Open: [http://localhost:5173](http://localhost:5173)

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite 5, Vanilla CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Email | Nodemailer (Gmail) |
| Animations | CSS animations, Canvas API |

## Customization

1. **Your Info** — Update `Hero.jsx`, `About.jsx`, `Timeline.jsx` with your real details
2. **Projects** — Edit the `PROJECTS` array in `Projects.jsx`
3. **Email** — Set `EMAIL_USER` and `EMAIL_PASS` (use Gmail App Password) in `.env`
4. **Resume** — Drop your `resume.pdf` in `client/public/`

---

Built with ❤️ by **Hariom Thakur**
