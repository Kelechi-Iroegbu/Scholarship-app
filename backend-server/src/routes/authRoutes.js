import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as authController from '../controllers/authController.js';

const router = Router();

router.get('/me', requireAuth, authController.me);
router.put('/me', requireAuth, asyncHandler(authController.updateMe));
router.post('/login', asyncHandler(authController.login));
router.post('/register', asyncHandler(authController.register));
router.post('/logout', requireAuth, asyncHandler(authController.logout));
router.post('/forgot-password', asyncHandler(authController.forgotPassword));
router.post('/reset-password', asyncHandler(authController.resetPassword));

export default router;
