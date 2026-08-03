import { Router } from 'express';
import { requireAuth, requireAdmin } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as cycleController from '../controllers/cycleController.js';
import * as adminController from '../controllers/adminController.js';

const router = Router();

router.use(requireAuth, requireAdmin);

router.get('/applications', asyncHandler(adminController.listApplications));
router.get('/applications/:id', asyncHandler(adminController.getApplication));
router.put('/applications/:id', asyncHandler(adminController.updateApplication));

router.get('/cycles', asyncHandler(cycleController.listAll));
router.post('/cycles', asyncHandler(cycleController.create));
router.put('/cycles/:id', asyncHandler(cycleController.update));

export default router;
