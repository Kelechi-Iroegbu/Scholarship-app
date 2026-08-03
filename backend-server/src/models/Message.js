import { pool } from '../config/db.js';
import { createId } from '../utils/createId.js';

export const Message = {
  byApplication: async (applicationId) => {
    const { rows } = await pool.query(
      'SELECT * FROM messages WHERE application_id = $1 ORDER BY created_date DESC',
      [applicationId]
    );
    return rows;
  },

  create: async ({ application_id, applicant_id, message, is_internal, sender_name }) => {
    const note = {
      id: createId('message'),
      application_id,
      applicant_id: applicant_id || null,
      sender_name,
      message,
      is_internal: Boolean(is_internal),
    };
    const { rows } = await pool.query(
      `INSERT INTO messages (id, application_id, applicant_id, sender_name, message, is_internal)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [note.id, note.application_id, note.applicant_id, note.sender_name, note.message, note.is_internal]
    );
    return rows[0];
  },
};
