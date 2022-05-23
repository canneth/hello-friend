
import { Router } from 'express';
import { getAllMatchingUsersController, getUserController } from './users.controller';

const router = Router();

router.get('/', getAllMatchingUsersController);
router.get('/:userId', getUserController);

export default router;