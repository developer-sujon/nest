import { Module } from '@nestjs/common';
import { EnvModule } from './config/env.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './features/auth/auth.module';
import { TasksModule } from './features/tasks/tasks.module';

@Module({
  imports: [EnvModule, DatabaseModule, AuthModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
