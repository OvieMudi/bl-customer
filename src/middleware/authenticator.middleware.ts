import { Response, NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';
import { customerRepository } from '../db/repositories';
import { IRequest } from '../interfaces/IRequest';

export class Authenticator {
  public static async authenticate(req: Request, res: Response, next: NextFunction) {
    const request = <IRequest>req;
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return Authenticator.errorResponse(res, 'No authorization token provided');
    }

    try {
      const decoded = <Record<string, any>>jwt.verify(token, <string>process.env.JWT_SECRET);
      const customer = await customerRepository.findOneBy({ id: decoded.id });
      if (!customer) {
        return Authenticator.errorResponse(res, 'Invalid authorization token');
      }
      request.customer = customer;
      return next();
    } catch (error) {
      return Authenticator.errorResponse(res, 'Invalid authorization token');
    }
  }

  private static errorResponse(res: Response, message: string) {
    return res.status(401).json({
      success: false,
      message: message,
    });
  }
}
