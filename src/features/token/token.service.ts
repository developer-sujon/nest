import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import moment from 'moment';
import { InjectModel } from '@nestjs/mongoose';

import { RoleEnum, TokenEnum } from 'src/constant';
import { Token } from './schemas/token.schema';
import { config } from 'src/config/app.config';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name)
    private readonly tokenModel: Model<Token>,
    private readonly jwtService: JwtService,
  ) {}

  generateToken(
    userId: Types.ObjectId,
    // role: RoleEnum = RoleEnum.ADMIN,
    role: string,
    expires: any,
    type: TokenEnum,
  ): string {
    const payload = {
      sub: userId,
      role,
      iat: moment().unix(),
      exp: expires.unix(),
      type,
    };

    return this.jwtService.sign(payload);
  }

  async saveToken(
    userId: Types.ObjectId,
    token: string,
    expires: any,
    type: TokenEnum,
    blacklisted: boolean = false,
  ): Promise<Token> {
    const tokenDoc = await new this.tokenModel({
      token,
      user: userId,
      expires: expires.toDate(),
      type,
      blacklisted,
    }).save();

    return tokenDoc;
  }

  async verifyToken(token: string, type: TokenEnum): Promise<Token> {
    const payload = this.jwtService.verify(token);
    const tokenDoc = await this.tokenModel.findOne({
      token,
      type,
      user: payload.sub,
      blacklisted: false,
    });
    if (!tokenDoc) {
      throw new NotFoundException('No token found');
    }

    return tokenDoc;
  }

  async generateAuthTokens(user: User): Promise<string> {
    const accessTokenExpires = moment().add(
      config.jwt.accessExpirationMinutes,
      'minutes',
    );
    const accessToken = this.generateToken(
      user.id,
      user.role,
      accessTokenExpires,
      TokenEnum.ACCESS,
    );

    const refreshTokenExpires = moment().add(
      config.jwt.refreshExpirationDays,
      'days',
    );
    const refreshToken = this.generateToken(
      user.id,
      user.role,
      refreshTokenExpires,
      TokenEnum.REFRESH,
    );
    await this.saveToken(
      user.id,
      refreshToken,
      refreshTokenExpires,
      TokenEnum.REFRESH,
    );

    return accessToken;
  }
}
