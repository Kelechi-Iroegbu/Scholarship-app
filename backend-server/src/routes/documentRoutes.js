import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as documentController from '../controllers/documentController.js';

const router = Router();

router.use(requireAuth);
router.get('/', asyncHandler(documentController.list));
router.post('/', asyncHandler(documentController.create));
router.put('/:id', asyncHandler(documentController.update));

export default router;
