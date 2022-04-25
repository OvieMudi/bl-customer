import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.service';
import { ErrorHandler } from '../utils/errorhandler.utils';

export class CustomerController {
  public static fundAccount(req: Request, res: Response) {
    return ErrorHandler.handleAsyncRequestError(res, async () => {
      const customers = await CustomerService.getCustomers();
      return res.json({ success: true, customers });
    });
  }
}
