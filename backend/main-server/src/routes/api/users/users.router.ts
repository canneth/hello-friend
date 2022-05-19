
import { Router } from 'express';
import { getUserController } from './users.controller';

const router = Router();

router.get('/:userId', getUserController);

export default router;