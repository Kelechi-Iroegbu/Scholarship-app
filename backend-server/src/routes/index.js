import { Router } from 'express';
import authRoutes from './authRoutes.js';
import cycleRoutes from './cycleRoutes.js';
import applicationRoutes from './applicationRoutes.js';
import documentRoutes from './documentRoutes.js';
import messageRoutes from './messageRoutes.js';
import adminRoutes from './adminRoutes.js';
import uploadRoutes from './uploadRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/cycles', cycleRoutes);
router.use('/applications', applicationRoutes);
router.use('/documents', documentRoutes);
router.use('/messages', messageRoutes);
router.use('/admin', adminRoutes);
router.use('/uploads', uploadRoutes);

export default router;
