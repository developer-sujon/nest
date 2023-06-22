import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { TaskStatus } from '../entities/task.entity';

export class TaskStatusValidator extends ValidationPipe {
  readonly allowStatus = [
    TaskStatus.NEW,
    TaskStatus.PENDING,
    TaskStatus.COMPLETE,
  ];

  transform(value: any): any {
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any): boolean {
    const idx = this.allowStatus.indexOf(status.toUpperCase());

    return idx !== -1;
  }
}
