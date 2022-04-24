import { Request } from "express"
import { Customer } from "../db/entity/Customer";

export interface IRequest extends Request {
  customer: Customer;
}