
import { Router } from 'express';
import { getDirectChatMessagesController } from './directChatMessages.controller';

const router = Router();

router.get('/', getDirectChatMessagesController);

export default router;