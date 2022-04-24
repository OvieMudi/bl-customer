import { Request, Response } from "express";

export class CustomerController {
  public static fundAccount(req: Request, res: Response): void {
    res.json({ success: true });
  }
}
