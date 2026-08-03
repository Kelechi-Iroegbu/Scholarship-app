import { randomUUID } from 'crypto';
import { pool } from '../config/db.js';
import { createId } from '../utils/createId.js';

export const User = {
  findByToken: async (token) => {
    if (!token) return null;
    const { rows } = await pool.query('SELECT * FROM users WHERE token = $1', [token]);
    return rows[0] || null;
  },

  findByEmail: async (email) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE lower(email) = lower($1)', [email || '']);
    return rows[0] || null;
  },

  findByResetToken: async (resetToken) => {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE reset_token = $1 AND reset_token_expires > $2',
      [resetToken, Date.now()]
    );
    return rows[0] || null;
  },

  create: async ({ email, password, full_name, phone, indigene_confirmed }) => {
    const user = {
      id: createId('user'),
      email: email.toLowerCase(),
      password,
      full_name,
      phone,
      indigene_confirmed: Boolean(indigene_confirmed),
      role: 'user',
      token: randomUUID(),
    };
    await pool.query(
      `INSERT INTO users (id, email, password, full_name, phone, indigene_confirmed, role, token)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [user.id, user.email, user.password, user.full_name, user.phone, user.indigene_confirmed, user.role, user.token]
    );
    return user;
  },

  issueToken: (user) => {
    user.token = randomUUID();
    return user.token;
  },

  // Writes back whatever the caller mutated on the in-memory user object —
  // mirrors the old "mutate then persist()" pattern so controllers barely
  // had to change, just now scoped to one row instead of the whole store.
  save: async (user) => {
    await pool.query(
      `UPDATE users SET
         full_name = $1,
         phone = $2,
         indigene_confirmed = $3,
         role = $4,
         token = $5,
         reset_token = $6,
         reset_token_expires = $7,
         password = $8
       WHERE id = $9`,
      [
        user.full_name,
        user.phone,
        user.indigene_confirmed,
        user.role,
        user.token,
        user.reset_token ?? null,
        user.reset_token_expires ?? null,
        user.password,
        user.id
      ]
    );
  },
};
