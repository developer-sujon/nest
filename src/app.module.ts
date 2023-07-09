import { Module, ValidationPipe } from '@nestjs/common';
import { JobsModule } from './features/jobs/jobs.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [JobsModule],
  controllers: [],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
