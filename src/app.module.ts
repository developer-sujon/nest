import { Module } from '@nestjs/common';
import { JobsModule } from './features/jobs/jobs.module';

@Module({
  imports: [JobsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
