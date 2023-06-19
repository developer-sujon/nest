import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async singIn(mobile: string, pass: string): Promise<User> {
    const user = await this.userService.findUserByMobile(mobile);
    if (!user) throw new UnauthorizedException();

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    return result;
  }
}
