import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Customer } from './Customer';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  customerId: string;

  @Column('decimal')
  balance: string;

  @CreateDateColumn({type: 'timestamptz'})
  createdAt: Date;

  @UpdateDateColumn({type: 'timestamptz'})
  updatedAt: Date;
  
  @OneToOne(() => Customer, (customer) => customer.account)
  customer: Customer;
}
