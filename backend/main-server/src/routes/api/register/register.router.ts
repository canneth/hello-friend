
import { Router } from 'express';
import { registerController } from './register.controller';

const router = Router();

router.post('/', registerController);

export default router;