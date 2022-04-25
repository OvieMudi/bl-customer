import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Account } from './Account';
import { Auth } from './Auth';
import { Profile } from './Profile';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @OneToOne(() => Account, (account) => account.customer)
  @JoinColumn()
  account: Account;

  @OneToOne(() => Profile, (profile) => profile.customer)
  @JoinColumn()
  profile: Profile;

  @OneToOne(() => Auth)
  @JoinColumn()
  auth: Auth;
}
