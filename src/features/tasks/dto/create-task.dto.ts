import { IsString, IsIn } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsIn([TaskStatus.COMPLETE, TaskStatus.NEW])
  status: TaskStatus;
}
