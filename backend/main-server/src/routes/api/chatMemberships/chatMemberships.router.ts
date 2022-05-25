
import { Router } from 'express';
import { getAllMatchingChatMembershipsController } from './chatMemberships.controller';

const router = Router();

router.get('/', getAllMatchingChatMembershipsController);

export default router;