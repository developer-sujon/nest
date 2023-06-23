import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TaskService } from 'src/task/task.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => TaskService))
    private readonly taskService: TaskService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.taskService.findAll();
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
