import { Router } from 'express';
import authRoutes from './authRoutes.js';
import tasksroute from './tasks/tasksroute.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/tasks', tasksroute);

export default router;
