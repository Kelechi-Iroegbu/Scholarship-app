import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as messageController from '../controllers/messageController.js';

const router = Router();

router.use(requireAuth);
router.get('/', asyncHandler(messageController.list));
router.post('/', asyncHandler(messageController.create));

export default router;
