import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as applicationController from '../controllers/applicationController.js';

const router = Router();

router.use(requireAuth);
router.get('/', asyncHandler(applicationController.list));
router.post('/', asyncHandler(applicationController.create));
router.put('/:id', asyncHandler(applicationController.update));

export default router;
