import { Router } from 'express';
import { CustomerController } from '../controllers/customerController';
import { Authenticator } from '../middleware/authenticator.middleware';

const customerRouter = Router();

customerRouter.get('/', [Authenticator.authenticate], CustomerController.fundAccount);

export { customerRouter };
