import { Router } from 'express';
import { authRouter } from './authRouter';
import { customerRouter } from './customerRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/customers', customerRouter);

export { router };
