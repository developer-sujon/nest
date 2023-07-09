import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
