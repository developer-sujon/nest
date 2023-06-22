import { Injectable, BadRequestException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './entities/task.entity';
import { FilterTaskDto } from './dto/filter-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: uuidv4(),
      status: TaskStatus.NEW,
      ...createTaskDto,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(filterTask: FilterTaskDto): Task[] {
    let tasks = this.tasks;

    const { status, search } = filterTask;

    if (status) {
      tasks = this.tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = this.tasks.filter((task) => {
        return task.title.includes(search) || task.description.includes(search);
      });
    }

    return tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) throw new BadRequestException('Task not found');

    return task;
  }

  updateStatus(id: string, status: TaskStatus): Task {
    let task = this.findOne(id);
    task.status = status;

    return task;
  }

  remove(id: string): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
