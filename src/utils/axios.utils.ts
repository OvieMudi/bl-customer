import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export class AxiosUtil {
  public static async createInstance(authorization: string) {
    const instance = axios.create({
      baseURL: process.env.BASE_URL_BILLING,
      headers: {
        authorization,
      },
    });

    return instance;
  }
}
