# Dynamic Capital

Crypto trading platform with demo trading, real-time charts, and portfolio management. Built with Next.js, Express, and MongoDB.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16 + TypeScript + Tailwind CSS v4 |
| Backend | Node.js + Express 5 + TypeScript |
| Database | MongoDB + Mongoose |
| Auth | JWT + NextAuth.js (Google OAuth) |
| Charts | TradingView Lightweight Charts |
| Market Data | Binance Public API |

## Project Structure

```
dynamic-capital/
├── frontend/                # Next.js application
│   └── src/
│       ├── app/             # App Router pages
│       ├── components/      # Reusable UI components
│       │   ├── ui/          # Base components (Button, Input, Modal)
│       │   └── layout/      # Header, Sidebar, Footer
│       ├── hooks/           # Custom React hooks
│       ├── services/        # API call functions
│       ├── utils/           # Helper functions
│       ├── types/           # TypeScript interfaces
│       ├── constants/       # App-wide constants
│       ├── lib/             # Third-party library configs
│       └── styles/          # Global styles & theme
├── backend/                 # Express API server
│   └── src/
│       ├── config/          # Database & environment config
│       ├── controllers/     # Request handlers
│       ├── middleware/      # Auth, error handling, logging
│       ├── models/          # Mongoose schemas
│       ├── routes/          # API route definitions
│       ├── services/        # Business logic
│       ├── utils/           # Helper functions
│       └── types/           # TypeScript types
└── package.json             # Root scripts (monorepo)
```

## Prerequisites

- **Node.js** >= 18
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **npm**

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/rafaellunawork/dynamic-capital-trading.git
cd dynamic-capital
```

### 2. Install dependencies

```bash
# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install
```

### 3. Configure environment variables

**Backend** -- copy and edit `backend/.env.example`:

```bash
cp backend/.env.example backend/.env
```

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dynamic-capital
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
EMAIL_HOST=
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASS=
FRONTEND_URL=http://localhost:3000
```

**Frontend** -- copy and edit `frontend/.env.example`:

```bash
cp frontend/.env.example frontend/.env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=Dynamic Capital
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### 4. Start development servers

From the project root:

```bash
# Frontend (http://localhost:3000)
npm run dev:client

# Backend (http://localhost:5000)
npm run dev:server
```

## Scripts

Run from the project root:

| Command | Description |
|---------|-------------|
| `npm run dev:client` | Start frontend dev server |
| `npm run dev:server` | Start backend dev server |
| `npm run build:client` | Build frontend for production |
| `npm run build:server` | Compile backend TypeScript |
| `npm run start:client` | Start frontend production server |
| `npm run start:server` | Start backend production server |
| `npm run lint:client` | Lint frontend code |
| `npm run lint:server` | Lint backend code |

## API Endpoints

### Health Check

```
GET /api/health
```

Response:

```json
{
  "success": true,
  "data": {
    "status": "ok",
    "timestamp": "2026-03-02T18:30:00.000Z",
    "uptime": 123.45,
    "database": "connected"
  }
}
```

## Database Collections

| Collection | Description |
|-----------|-------------|
| `users` | User accounts, auth, preferences |
| `balances` | User wallet balances (available + reserved) |
| `orders` | Market & limit orders with SL/TP |
| `positions` | Open & closed trading positions |
| `trades` | Completed trade history with P&L |
| `notifications` | In-app & email notification records |
| `assets` | Tradable assets config (BTC, ETH, SOL) |

## Supported Assets

| Symbol | Name |
|--------|------|
| BTC | Bitcoin |
| ETH | Ethereum |
| SOL | Solana |

## Features

- Email & Google OAuth authentication
- Demo trading with $10,000 virtual balance
- Market & limit orders with stop-loss/take-profit
- Fractional trading support
- Candlestick & line charts with MA/RSI indicators
- Real-time price feeds (15-min delayed)
- Portfolio tracking with P&L performance graphs
- Trade history with CSV export
- In-app & email notifications
- Admin panel (user management, balance resets)
- Mobile-first responsive design
- Light & dark mode

## License

Private -- All rights reserved.
