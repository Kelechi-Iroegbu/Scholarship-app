import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as cycleController from '../controllers/cycleController.js';

const router = Router();

router.get('/active', requireAuth, asyncHandler(cycleController.listActive));

export default router;
