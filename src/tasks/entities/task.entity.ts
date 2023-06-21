export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  NEW = 'NEW',
  PENDING = 'PENDING',
  COMPLETE = 'COMPLETE',
}
