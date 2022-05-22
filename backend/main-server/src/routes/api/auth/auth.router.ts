
import { Router } from 'express';
import { loginController, logoutController, verifyController } from './auth.controller';

const router = Router();

router.post('/login', loginController);
router.post('/logout', logoutController);
router.post('/verify', verifyController);

export default router;