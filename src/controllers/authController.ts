import { Request, Response } from "express";

export class AuthController {
  public static register(req: Request, res: Response): void {
    res.json({ success: true });
  }

  public static login(req: Request, res: Response): void {
    res.json({ success: true });
  }
}
