import { Request, Response } from 'express';
import { IRequest } from '../interfaces/IRequest';
import { AccountService } from '../services/account.service';
import { ErrorHandler } from '../utils/errorhandler.utils';

export class AccountController {
  public static async fundAccount(req: Request, res: Response) {
    return ErrorHandler.handleAsyncRequestError(res, async () => {
      await AccountService.fundAccount(<IRequest>req);

      res.json({ success: true });
    });
  }

  public static async completeFundingRequest(req: Request, res: Response) {
    return ErrorHandler.handleAsyncRequestError(res, async () => {
      await AccountService.completeFunding(<IRequest>req);
      res.json({ success: true });
    });
  }
}
