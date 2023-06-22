import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { TokenService } from '../token/token.service';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<string> {
    const user = await this.userService.createUser(signUpDto);
    return this.tokenService.generateAuthTokens(user);
  }

  async login(loginDto: LoginDto): Promise<string> {
    const { email, password } = loginDto;

    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return this.tokenService.generateAuthTokens(user);
  }
}
