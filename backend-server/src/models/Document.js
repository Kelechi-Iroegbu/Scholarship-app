import { pool } from '../config/db.js';
import { createId } from '../utils/createId.js';

export const Document = {
  byApplication: async (applicationId) => {
    const { rows } = await pool.query(
      'SELECT * FROM documents WHERE application_id = $1 ORDER BY created_date ASC',
      [applicationId]
    );
    return rows;
  },

  findById: async (id) => {
    const { rows } = await pool.query('SELECT * FROM documents WHERE id = $1', [id]);
    return rows[0] || null;
  },

  create: async ({ application_id, type, file_url, file_name }) => {
    const document = {
      id: createId('document'),
      application_id,
      type,
      file_url,
      file_name,
    };
    const { rows } = await pool.query(
      `INSERT INTO documents (id, application_id, type, file_url, file_name)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [document.id, document.application_id, document.type, document.file_url, document.file_name]
    );
    return rows[0];
  },

  save: async (document) => {
    await pool.query(
      `UPDATE documents SET type = $1, file_url = $2, file_name = $3 WHERE id = $4`,
      [document.type, document.file_url, document.file_name, document.id]
    );
  },
};
