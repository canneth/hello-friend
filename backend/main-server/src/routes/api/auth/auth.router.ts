
import { Router } from 'express';
import loginRouter from './login/login.router';
import logoutRouter from './logout/logout.router';

const router = Router();

router.use('/login', loginRouter);
router.use('/logout', logoutRouter);

export default router;