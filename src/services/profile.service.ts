import { Request } from 'express';
import { Profile } from '../db/entity/Profile';

export class ProfileService {
  public static createProfileObject(req: Request) {
    const { firstName, lastName } = req.body;

    const profile = new Profile();
    profile.firstName = firstName;
    profile.lastName = lastName;

    return profile;
  }
}
