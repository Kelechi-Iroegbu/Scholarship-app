import { Router } from 'express';
import multer from 'multer';
import { requireAuth } from '../middleware/auth.js';
import { uploadDir } from '../config/paths.js';
import * as uploadController from '../controllers/uploadController.js';

const upload = multer({ dest: uploadDir });
const router = Router();

router.post('/', requireAuth, upload.single('file'), uploadController.uploadFile);

export default router;
