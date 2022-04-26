import { Request } from 'express';
import AppDataSource from '../db/dataSource';
import { Auth } from '../db/entity/Auth';
import { Customer } from '../db/entity/Customer';
import { Profile } from '../db/entity/Profile';
import { customerRepository } from '../db/repositories';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';

export class CustomerService {
  public static async createCustomer(req: Request) {
    const { email, password } = req.body;

    const auth = AuthService.createAuthObject(password);
    const profile = ProfileService.createProfileObject(req);
    const customer = CustomerService.createCustomerObject({ email, auth, profile });

    await AppDataSource.manager.transaction(async (transactionEntityManager) => {
      await transactionEntityManager.save(auth);
      await transactionEntityManager.save(profile);
      await transactionEntityManager.save(customer);
    });

    customer.auth = <Auth>(<unknown>undefined);
    return customer;
  }

  public static async getCustomers() {
    const customers = await customerRepository.find({ relations: ['profile'] });
    return customers;
  }

  public static createCustomerObject(customerData: { email: string; auth: Auth; profile: Profile }) {
    const customer = new Customer();
    customer.email = customerData.email;
    customer.auth = customerData.auth;
    customer.profile = customerData.profile;

    return customer;
  }
}
