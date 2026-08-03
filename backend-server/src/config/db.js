import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL is not set. Copy backend-server/.env.example to backend-server/.env and fill in your Postgres connection string.'
  );
}

// connectionString alone is enough — pg parses `sslmode=require` (as used by
// Neon and most hosted Postgres providers) directly from the URL.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
