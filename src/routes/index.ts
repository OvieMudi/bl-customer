import { Router } from 'express';
import { accountRouter } from './accountRouter';
import { authRouter } from './authRouter';
import { customerRouter } from './customerRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/customers', customerRouter);
router.use('/accounts', accountRouter);

export { router };
