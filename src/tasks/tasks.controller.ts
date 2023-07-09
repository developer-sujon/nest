import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseFilters,
  BadRequestException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { IdException } from 'src/exceptions/id-exception';
import { IdExceptionFilter } from 'src/exceptions/id-exception.filter';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';

@Controller('tasks')
@UseFilters(HttpExceptionFilter)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @UseFilters(IdExceptionFilter)
  findOne(@Param('id') id: string) {
    throw new BadRequestException('Invalid id');
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
