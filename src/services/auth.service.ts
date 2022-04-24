import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { Auth } from '../db/entity/Auth';
import { customerRepository } from '../db/repositories';

export class AuthService {
  public static createAuthObject(password: string) {
    const auth = new Auth();
    auth.password = password;
    return auth;
  }

  public static async authenticateUser(req: Request) {
    const { email, password } = req.body;
    const customer = await customerRepository.findOne({ where: { email }, relations: ['auth', 'profile'] });
    console.log('AuthService ~ authenticateUser ~ customer', customer);

    if (customer && customer.auth.password === password) {
      customer.auth = <Auth>(<unknown>undefined);
      return {
        token: AuthService.createJwtToken(customer.id),
        customer,
      };
    }

    return null;
  }

  private static createJwtToken(id: string) {
    const token = jwt.sign({ id }, <string>process.env.JWT_SECRET);
    return token;
  }
}
