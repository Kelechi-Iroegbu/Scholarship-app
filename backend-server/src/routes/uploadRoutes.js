import { Router } from 'express';
import multer from 'multer';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as uploadController from '../controllers/uploadController.js';

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: MAX_UPLOAD_BYTES } });
const router = Router();

router.post('/', requireAuth, upload.single('file'), asyncHandler(uploadController.uploadFile));

export default router;
