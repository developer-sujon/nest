import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  create(): unknown {
    return this.taskService.create();
  }

  @Get()
  findAll(): unknown {
    return this.taskService.findAll();
  }

  @Patch()
  update(): unknown {
    return this.taskService.update();
  }

  @Delete()
  remove(): unknown {
    return this.taskService.remove();
  }
}
