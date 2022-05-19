
import { Router } from 'express';
import { checkAuthController } from './check.controller';

const router = Router();

router.get('/', checkAuthController);

export default router;