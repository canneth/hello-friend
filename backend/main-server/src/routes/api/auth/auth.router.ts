
import { Router } from 'express';
import { loginController, logoutController, verifyAuthController } from './auth.controller';

const router = Router();

router.post('/login', loginController);
router.post('/logout', logoutController);
router.post('/verify', verifyAuthController);

export default router;