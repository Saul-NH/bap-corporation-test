import { Router } from 'express';
import AuthController from '../controllers/AuthController';
const authController = new AuthController();
const router = Router();

router.post('/', authController.login);

export default router;