import { AppDataSource } from "../dataSource";
import { Auth } from "../entity/Auth";
import { Customer } from "../entity/Customer";
import { Profile } from "../entity/Profile";

export const customerRepository = AppDataSource.getRepository(Customer);
export const authRepository = AppDataSource.getRepository(Auth);
export const profileRepository = AppDataSource.getRepository(Profile);
