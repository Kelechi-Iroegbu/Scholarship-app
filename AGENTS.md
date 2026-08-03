# AGENTS.md

## Project Context

This is a scholarship application platform: a React/Vite frontend backed by a local Express server. Treat it as user-owned application code, keep changes focused on the user's request, and preserve existing project conventions.

Start with `README.md` for local setup and environment variables.

## Key Files

- `src/`: frontend application source.
- `src/api/appClient.js`: frontend API client, wraps `src/api/backendClient.js`.
- `backend-server/`: local Express backend, organized as models/views/controllers/routes/middleware under `src/`. Entry point is `server.js`; data is stored in Postgres (raw `pg`, no ORM) via `DATABASE_URL` in `backend-server/.env`.
- `vite.config.js`: Vite config; proxies `/api` to the local backend during dev.

## Working Notes

- Start the backend with `cd backend-server && npm start`, then the frontend with `npm run dev` (from the project root).
- Run the relevant checks from `package.json` before finishing code changes.
