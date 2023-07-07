import { Controller, Inject } from '@nestjs/common';

@Controller('database')
export class DatabaseController {
  constructor(
    @Inject('DATABASE_CONNECTION') private databaseConnection: string,
  ) {
    console.log(databaseConnection);
  }
}
