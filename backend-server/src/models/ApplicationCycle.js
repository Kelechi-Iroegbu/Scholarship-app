import { pool } from '../config/db.js';
import { createId } from '../utils/createId.js';

export const ApplicationCycle = {
  all: async () => {
    const { rows } = await pool.query('SELECT * FROM cycles ORDER BY created_date DESC');
    return rows;
  },

  active: async () => {
    const { rows } = await pool.query('SELECT * FROM cycles WHERE is_active = true ORDER BY created_date DESC');
    return rows;
  },

  findById: async (id) => {
    const { rows } = await pool.query('SELECT * FROM cycles WHERE id = $1', [id]);
    return rows[0] || null;
  },

  create: async ({ name, is_active, deadline, grace_period_days }) => {
    const cycle = {
      id: createId('cycle'),
      name: name || 'New application cycle',
      is_active: Boolean(is_active),
      deadline: deadline || new Date().toISOString().split('T')[0],
      grace_period_days: grace_period_days ?? 0,
    };
    const { rows } = await pool.query(
      `INSERT INTO cycles (id, name, is_active, deadline, grace_period_days)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [cycle.id, cycle.name, cycle.is_active, cycle.deadline, cycle.grace_period_days]
    );
    return rows[0];
  },

  save: async (cycle) => {
    await pool.query(
      `UPDATE cycles SET name = $1, is_active = $2, deadline = $3, grace_period_days = $4 WHERE id = $5`,
      [cycle.name, cycle.is_active, cycle.deadline, cycle.grace_period_days, cycle.id]
    );
  },
};
