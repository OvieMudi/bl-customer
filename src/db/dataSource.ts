import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { Customer } from './entity/Customer';
import { Auth } from './entity/Auth';
import { Profile } from './entity/Profile';
import { Account } from './entity/Account';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.NODE_ENV === 'development',
  logging: false,
  entities: [Customer, Auth, Profile, Account],
  migrations: [`${__dirname}/migration/*.ts`],
  subscribers: [],
});

export default AppDataSource;
