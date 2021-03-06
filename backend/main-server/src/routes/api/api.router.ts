
import { Router } from 'express';
import authRouter from './auth/auth.router';
import registerRouter from './register/register.router';
import usersRouter from './users/users.router';
import chatMessagesRouter from './chatMessages/chatMessages.router';
import chatMembershipsRouter from './chatMemberships/chatMemberships.router';
import chatsRouter from './chats/chats.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/register', registerRouter);
router.use('/users', usersRouter);
router.use('/chatMessages', chatMessagesRouter);
router.use('/chatMemberships', chatMembershipsRouter);
router.use('/chats', chatsRouter);

export default router;