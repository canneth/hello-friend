
import { Router } from 'express';
import { logoutController } from './logout.controller';

const router = Router();

router.post('/', logoutController);

export default router;