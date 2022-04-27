import { Request } from 'express';
import { Account } from '../db/entity/Account';
import { accountRepository } from '../db/repositories';
import { IRequest } from '../interfaces/IRequest';
import { AxiosUtil } from '../utils/axios.utils';

export class AccountService {
  public static async fundAccount(req: IRequest) {
    const { amount } = req.body;

    const axios = AxiosUtil.createInstance(req.headers.authorization || '');

    const response = await axios.post('/transactions', { amount });
    return response.data;
  }

  public static createAccountObject(customerId: string) {
    const account = new Account();
    account.customerId = customerId;
    account.balance = '0';
    return account;
  }

  public static async completeFunding(req: Request) {
    const { customerId, amount } = req.body;
    console.log('AccountService ~ completeFunding ~ amount', amount);
    const account = await accountRepository.findOneBy({ customerId });
    console.log('AccountService ~ completeFunding ~ account', account);
    if (!account) {
      return null;
    }
    account.balance = (parseFloat(<string>account.balance) + parseFloat(amount)).toString();
    await accountRepository.save(account);
    return account;
  }
}
