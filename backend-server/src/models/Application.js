import { pool } from '../config/db.js';
import { createId } from '../utils/createId.js';

const APPLICATION_COLUMNS = [
  'full_name',
  'email',
  'phone',
  'current_step',
  'status',
  'date_of_birth',
  'indigene_confirmed',
  'major_community',
  'autonomous_community',
  'address',
  'school',
  'school_in_isuikwuato',
  'jamb_reg_number',
  'jamb_score',
  'institution',
  'intended_degree',
  'statement_of_purpose',
  'financial_hardship_statement'
];

export const Application = {
  all: async () => {
    const { rows } = await pool.query('SELECT * FROM applications ORDER BY created_date DESC');
    return rows;
  },

  findById: async (id) => {
    const { rows } = await pool.query('SELECT * FROM applications WHERE id = $1', [id]);
    return rows[0] || null;
  },

  findByCycleId: async (cycleId) => {
    const { rows } = await pool.query('SELECT * FROM applications WHERE cycle_id = $1', [cycleId]);
    return rows;
  },

  findByUserId: async (userId) => {
    const { rows } = await pool.query('SELECT * FROM applications WHERE user_id = $1', [userId]);
    return rows;
  },

  create: async (payload, user) => {
    const application = {
      id: createId('application'),
      user_id: user.id,
      cycle_id: payload.cycle_id,
      full_name: payload.full_name || user.full_name,
      email: payload.email || user.email,
      phone: payload.phone || user.phone,
      current_step: payload.current_step || 1,
      status: payload.status || 'draft',
    };
    const { rows } = await pool.query(
      `INSERT INTO applications (id, user_id, cycle_id, full_name, email, phone, current_step, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [
        application.id,
        application.user_id,
        application.cycle_id,
        application.full_name,
        application.email,
        application.phone,
        application.current_step,
        application.status
      ]
    );
    return rows[0];
  },

  // Writes back every mutable application column from the in-memory object —
  // controllers just Object.assign(application, req.body) as before, then
  // call this. user_id/cycle_id are deliberately excluded: the frontend
  // never changes them post-creation, and they're foreign keys.
  save: async (application) => {
    const values = APPLICATION_COLUMNS.map((col) => application[col] ?? null);
    const setClause = APPLICATION_COLUMNS.map((col, i) => `${col} = $${i + 1}`).join(', ');
    await pool.query(
      `UPDATE applications SET ${setClause} WHERE id = $${APPLICATION_COLUMNS.length + 1}`,
      [...values, application.id]
    );
  },
};
