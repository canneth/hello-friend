
import { Router } from 'express';
import authRouter from './auth/auth.router';
import registerRouter from './register/register.router';


const router = Router();

router.use('/auth', authRouter);
router.use('/register', registerRouter);

export default router;