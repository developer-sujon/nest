import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE, APP_FILTER } from '@nestjs/core';
import { TasksModule } from './tasks/tasks.module';
import { AppExceptionFilter } from './exceptions/app-exception.filter';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    // marking `AppExceptionFilter` global
    // we can also declare it in `main.ts` but then DI (Dependency Injection) will not work
    // and we need to pass the HttpAdapterHost explicitly in the `main.ts`
    { provide: APP_FILTER, useClass: AppExceptionFilter },
  ],
})
export class AppModule {}
