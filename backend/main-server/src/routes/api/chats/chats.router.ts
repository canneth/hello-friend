
import { Router } from 'express';
import { getAllMatchingChatsController } from './chats.controller';

const router = Router();

router.get('/', getAllMatchingChatsController);

export default router;