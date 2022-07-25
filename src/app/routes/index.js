import { Router } from 'express';
import taskRoutes from './task.routes';
import authRoutes from './auth.routes';
import { verifyToken } from '../middlewares/verifyToken';

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.use('/api/authentication', authRoutes);

router.use('/api/tasks', verifyToken, taskRoutes);

export default router;
