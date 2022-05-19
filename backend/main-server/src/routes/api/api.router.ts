
import { Router } from 'express';
import authRouter from './auth/auth.router';
import registerRouter from './register/register.router';
import usersRouter from './users/users.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/register', registerRouter);
router.use('/users', usersRouter);

export default router;