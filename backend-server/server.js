import express from 'express';
import cors from 'cors';
import { ensureSchema, seedIfEmpty } from './src/config/schema.js';
import apiRoutes from './src/routes/index.js';
import { requireAuth } from './src/middleware/auth.js';
import { asyncHandler } from './src/utils/asyncHandler.js';
import { serveFile } from './src/controllers/uploadController.js';

await ensureSchema();
await seedIfEmpty();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.get('/uploads/:id', requireAuth, asyncHandler(serveFile));

app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Catches errors forwarded by asyncHandler (a failed query, etc.) so a DB
// error returns a clean 500 instead of hanging the request.
app.use((err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({ message: 'File is too large (10 MB maximum)' });
  }
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
