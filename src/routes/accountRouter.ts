import { Router } from 'express';
import { AccountController } from '../controllers/accountController';
import { Authenticator } from '../middleware/authenticator.middleware';

const accountRouter = Router();

accountRouter.post('/fund', [Authenticator.authenticate], AccountController.fundAccount);

export { accountRouter };
