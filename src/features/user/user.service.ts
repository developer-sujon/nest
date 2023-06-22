import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    if (this.getUserByEmail(createUserDto.email)) {
      throw new BadRequestException('Email already taken');
    }
    return this.userModel.create(createUserDto);
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  async getUserById(id: Types.ObjectId): Promise<User> {
    return this.userModel.findById(id);
  }

  async updateUserById(
    id: Types.ObjectId,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      id,
      { $set: updateUserDto },
      { new: true },
    );
  }

  async getUsers(matchQuery: unknown): Promise<User[]> {
    return this.userModel.find(matchQuery);
  }
}
