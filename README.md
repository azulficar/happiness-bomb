# Happiness Bomb

Send joy and positive messages to friends and loved ones.

## Project Structure

```
happiness-bomb/
│
├── apps/
│   ├── web/                 # Web frontend (React)
│   ├── mobile/              # Mobile app (React Native with Expo)
│   └── backend/             # Node.js backend (NestJS + GraphQL)
│
├── packages/
│   ├── ui/                  # Shared design system (buttons, cards, etc.)
│   ├── types/               # Shared TypeScript types/interfaces
│   └── utils/               # Shared helper functions
│
├── prisma/                  # Prisma schema & migrations
│
├── infra/                   # Infrastructure as Code (optional)
│
├── .github/                 # GitHub Actions, issue templates, etc.
│
├── .env.example             # Sample env file
├── docker-compose.yml       # Local dev stack
├── README.md
└── turbo.json               # Turborepo config
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)
- Docker (for local development environment)

### Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development environment:
   ```
   docker-compose up -d
   ```
4. Start the development server:
   ```
   npm run dev --workspace=@happiness-bomb/backend
   ```

## Features

- Create happiness bombs with personalized messages
- Invite friends to contribute to a happiness bomb
- Send and receive happiness bombs
- View sent and received happiness bombs
- User authentication via Clerk

## Tech Stack

- Frontend: React, TailwindCSS, Apollo Client
- Mobile: React Native (Expo)
- Backend: NestJS, GraphQL, Prisma
- Database: PostgreSQL
- Authentication: Clerk

