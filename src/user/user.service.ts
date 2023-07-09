import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { users } from './entity/user';

@Injectable()
export class UserService {
  private readonly users: User[] = users;

  async findUserByMobile(mobile: string): Promise<User> {
    return this.users.find((user) => user.mobile === mobile);
  }

  // async findUserByMobile(mobile: string): Promise<User> {
  //   return this.users.find((user) => user.mobile === mobile);
  // }
}
