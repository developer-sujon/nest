import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  create(): unknown {
    return 'createTask';
  }

  findAll(): unknown {
    return 'findAll';
  }

  update(): unknown {
    return 'update';
  }

  remove(): unknown {
    return 'remove';
  }
}
