
import { Router } from 'express';
import { loginController } from './login.controller';

const router = Router();

router.post('/', loginController);

export default router;