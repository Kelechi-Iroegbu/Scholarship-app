# Deft Scholar Path Hub

This repository contains the frontend app and a local Express backend for development.

## Prerequisites

1. Clone the repository using the project's Git URL.
2. Navigate to the project directory.
3. Install frontend dependencies: `npm install`.
4. Install backend dependencies: `cd backend-server && npm install`.
5. Set up a Postgres database (see **Database** below) and create `backend-server/.env`.

## Run Locally

Start the backend from the `backend-server` folder:

```bash
cd backend-server
npm start
```

Then start the frontend from the project root:

```bash
npm run dev
```

The frontend will proxy `/api` requests to `http://localhost:4000`.

Open the local URL printed by Vite.

## Database

The backend uses Postgres directly (`pg`, no ORM). Any Postgres works, including a
free-tier hosted one like [Neon](https://neon.tech):

1. Create a project on Neon (or any Postgres host) and copy its connection string.
2. Copy `backend-server/.env.example` to `backend-server/.env` and set `DATABASE_URL`
   to that connection string.
3. Just run `npm start` — the server creates the tables (if they don't already
   exist) and seeds an admin login (`admin@local` / `password`) and a default
   application cycle on first boot. There's no separate migration step.

## Backend

The local backend lives in `backend-server/` as a small Express app organized in
MVC layers:

- `server.js` — entry point; wires middleware, ensures the DB schema exists, and
  mounts the API routes.
- `src/routes/` — maps HTTP paths to controllers.
- `src/controllers/` — request handlers.
- `src/models/` — data access (parameterized SQL via `pg`).
- `src/views/` — response shaping (e.g. stripping password/token fields).
- `src/middleware/` — auth guards.
- `src/config/` — the `pg` pool, file upload paths, and schema/seed SQL.

## App Usage

- `npm run dev` starts the Vite frontend.
- `cd backend-server && npm start` starts the Express backend.
