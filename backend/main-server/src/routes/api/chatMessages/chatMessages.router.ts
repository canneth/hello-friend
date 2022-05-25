
import { Router } from 'express';
import { getAllMatchingChatMessagesController } from './chatMessages.controller';

const router = Router();

router.get('/', getAllMatchingChatMessagesController);

export default router;