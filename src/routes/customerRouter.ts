import { Router } from "express";
import { CustomerController } from "../controllers/customerController";

const customerRouter = Router();

customerRouter.post('/account', CustomerController.fundAccount);

export { customerRouter };
