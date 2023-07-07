import { Module } from '@nestjs/common';
import { JobsModule } from './features/jobs/jobs.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [JobsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
