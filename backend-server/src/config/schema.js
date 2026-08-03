import { pool } from './db.js';

// No migration framework — this is intentionally just idempotent DDL that
// runs once on every server start. Fine for a project this size; reach for
// a real migration tool if the schema starts changing under live data.
const DDL = `
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    indigene_confirmed BOOLEAN NOT NULL DEFAULT false,
    role TEXT NOT NULL DEFAULT 'user',
    token TEXT,
    reset_token TEXT,
    reset_token_expires BIGINT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  );

  CREATE TABLE IF NOT EXISTS cycles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT false,
    deadline TIMESTAMPTZ NOT NULL,
    grace_period_days INTEGER NOT NULL DEFAULT 0,
    created_date TIMESTAMPTZ NOT NULL DEFAULT now()
  );

  CREATE TABLE IF NOT EXISTS applications (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id),
    cycle_id TEXT NOT NULL REFERENCES cycles(id),
    full_name TEXT,
    email TEXT,
    phone TEXT,
    current_step INTEGER NOT NULL DEFAULT 1,
    status TEXT NOT NULL DEFAULT 'draft',
    -- Stored as TEXT, not DATE: the wizard's <input type="date"> round-trips
    -- a plain "YYYY-MM-DD" string, and a real DATE column would come back
    -- as a timestamp and break that controlled input.
    date_of_birth TEXT,
    indigene_confirmed BOOLEAN,
    address TEXT,
    school TEXT,
    school_in_isuikwuato BOOLEAN,
    jamb_reg_number TEXT,
    jamb_score INTEGER,
    institution TEXT,
    intended_degree TEXT,
    statement_of_purpose TEXT,
    financial_hardship_statement TEXT,
    created_date TIMESTAMPTZ NOT NULL DEFAULT now()
  );
  CREATE INDEX IF NOT EXISTS applications_user_id_idx ON applications(user_id);
  CREATE INDEX IF NOT EXISTS applications_cycle_id_idx ON applications(cycle_id);

  CREATE TABLE IF NOT EXISTS documents (
    id TEXT PRIMARY KEY,
    application_id TEXT NOT NULL REFERENCES applications(id),
    type TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    created_date TIMESTAMPTZ NOT NULL DEFAULT now()
  );
  CREATE INDEX IF NOT EXISTS documents_application_id_idx ON documents(application_id);

  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    application_id TEXT NOT NULL REFERENCES applications(id),
    applicant_id TEXT,
    sender_name TEXT NOT NULL,
    message TEXT NOT NULL,
    is_internal BOOLEAN NOT NULL DEFAULT false,
    created_date TIMESTAMPTZ NOT NULL DEFAULT now()
  );
  CREATE INDEX IF NOT EXISTS messages_application_id_idx ON messages(application_id);
`;

export const ensureSchema = async () => {
  await pool.query(DDL);
};

// Mirrors the old JSON-file store's first-run seed: a working admin login
// and one active cycle, so local dev works with zero manual setup.
export const seedIfEmpty = async () => {
  const { rows } = await pool.query('SELECT 1 FROM users LIMIT 1');
  if (rows.length > 0) return;

  await pool.query(
    `INSERT INTO users (id, email, password, full_name, phone, indigene_confirmed, role, token)
     VALUES ('user-admin', 'admin@local', 'password', 'Admin User', '', false, 'admin', 'admin-token')`
  );

  await pool.query(
    `INSERT INTO cycles (id, name, is_active, deadline, grace_period_days)
     VALUES ('cycle-1', '2026 Ovim Scholarship Cycle', true, '2026-12-31', 0)`
  );
};
