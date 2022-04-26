import AppDataSource from "../dataSource";
import { Account } from "../entity/Account";
import { Auth } from "../entity/Auth";
import { Customer } from "../entity/Customer";
import { Profile } from "../entity/Profile";

export const customerRepository = AppDataSource.getRepository(Customer);
export const authRepository = AppDataSource.getRepository(Auth);
export const profileRepository = AppDataSource.getRepository(Profile);
export const accountRepository = AppDataSource.getRepository(Account);
