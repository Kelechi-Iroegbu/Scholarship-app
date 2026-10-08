import { pool } from '../config/db.js';
import { createId } from '../utils/createId.js';

export const UploadedFile = {
  create: async ({ file_name, mime_type, data }) => {
    const id = createId('file');
    await pool.query(
      'INSERT INTO uploaded_files (id, file_name, mime_type, data) VALUES ($1, $2, $3, $4)',
      [id, file_name, mime_type, data]
    );
    return id;
  },

  // True when the file is attached to one of this user's own applications.
  isOwnedBy: async (id, userId) => {
    const { rows } = await pool.query(
      `SELECT 1 FROM documents d JOIN applications a ON a.id = d.application_id
       WHERE d.file_url = $1 AND a.user_id = $2 LIMIT 1`,
      [`/uploads/${id}`, userId]
    );
    return rows.length > 0;
  },

  findById: async (id) => {
    const { rows } = await pool.query(
      'SELECT file_name, mime_type, data FROM uploaded_files WHERE id = $1',
      [id]
    );
    return rows[0] || null;
  },
};
