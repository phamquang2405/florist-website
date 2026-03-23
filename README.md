# Florist Web

Production-ready Next.js 14 starter focused on a scalable App Router setup, authentication, protected routes, typed forms, route handlers, Zustand state, Tailwind design tokens, and Vitest coverage.

## Stack

- Next.js 14 + App Router + TypeScript
- TailwindCSS with a lightweight design system
- NextAuth credentials auth with JWT sessions
- Zustand for local UI state
- React Hook Form + Zod
- Route handlers for example CRUD APIs
- Vitest + Testing Library
- ESLint + Prettier
- Docker support

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Optional: copy the environment file if you want to override the built-in demo defaults:

```bash
cp .env.example .env
```

3. Start development:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Demo Login

- Email: value from `AUTH_DEMO_EMAIL`
- Password: value from `AUTH_DEMO_PASSWORD`

Default values in `.env.example`:

- `admin@florist.local`
- `changeme123`

## Scripts

- `npm run dev` starts the Next.js dev server
- `npm run build` creates the production build
- `npm run start` runs the production server
- `npm run lint` runs ESLint
- `npm run test` runs Vitest once
- `npm run test:watch` runs Vitest in watch mode
- `npm run format` checks formatting
- `npm run format:write` formats the project

## Project Structure

```text
src
├── app
│   ├── (auth)/login
│   ├── (dashboard)/dashboard
│   ├── api
│   └── globals.css
├── components
│   ├── layout
│   └── ui
├── features
│   ├── auth
│   └── items
├── hooks
├── lib
│   ├── api
│   ├── auth
│   ├── data
│   ├── services
│   └── utils
├── store
└── types
```

## Notes

- Authentication uses a credentials provider and JWT-backed sessions for a zero-database demo setup.
- `src/middleware.ts` protects the `/dashboard` route group.
- `src/app/api/items` demonstrates GET, POST, PATCH, and DELETE handlers.
- The in-memory item service is demo-friendly; replace it with a database-backed service for production data persistence.
