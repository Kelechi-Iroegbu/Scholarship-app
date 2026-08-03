import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// backend-server/ root, two levels up from src/config/.
export const rootDir = path.join(__dirname, '..', '..');
export const uploadDir = path.join(rootDir, 'uploads');
