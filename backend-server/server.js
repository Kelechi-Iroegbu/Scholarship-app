import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import { uploadDir } from './src/config/paths.js';
import { ensureSchema, seedIfEmpty } from './src/config/schema.js';
import apiRoutes from './src/routes/index.js';

await fs.mkdir(uploadDir, { recursive: true });
await ensureSchema();
await seedIfEmpty();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use('/uploads', express.static(uploadDir));

app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Catches errors forwarded by asyncHandler (a failed query, etc.) so a DB
// error returns a clean 500 instead of hanging the request.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
