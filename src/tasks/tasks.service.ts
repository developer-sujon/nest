import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './entities/task.entity';

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

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    return this.tasks.find((task) => task.id === id);
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
