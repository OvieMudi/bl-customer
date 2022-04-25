import { IRequest } from '../interfaces/IRequest';
import { AxiosUtil } from '../utils/axios.utils';

export class AccountService {
  public static async fundAccount(req: IRequest) {
    const { amount } = req.body;

    const axios = AxiosUtil.createInstance(req.headers.authorization || '');

    const response = await (await axios).post('/transactions', { amount });
    console.log('AccountService ~ fundAccount ~ response', response.data);

    return response.data;
  }
}
