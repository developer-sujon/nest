import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/entity/user.entity';
import { singInDto } from './dto/singIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  singIn(@Body() singInDto: singInDto): Promise<User> {
    return this.authService.singIn(singInDto.mobile, singInDto.password);
  }
}
