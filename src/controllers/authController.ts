import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customer.service';
import { ErrorHandler } from '../utils/errorhandler.utils';

export class AuthController {
  public static async register(req: Request, res: Response) {
    return ErrorHandler.handleAsyncRequestError(res, async () => {
      const customer = await CustomerService.createCustomer(req);
      return res.json({ success: true, customer });
    });
  }

  public static login(req: Request, res: Response) {
    return ErrorHandler.handleAsyncRequestError(res, async () => {
      const auth = await AuthService.authenticateUser(req);
      if (auth) {
        return res.json({ success: true, auth });
      }
      return res.status(401).json({ success: false, message: 'Incorrect email or password' });
    });
  }
}
