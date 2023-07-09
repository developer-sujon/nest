import { Module } from '@nestjs/common';
<<<<<<< HEAD
<<<<<<< HEAD
import { ConfigurationModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './features/user/user.module';
import { AuthModule } from './features/auth/auth.module';
import { TasksModule } from './features/tasks/tasks.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    UserModule,
    AuthModule,
    TasksModule,
  ],
=======
import { JobsModule } from './features/jobs/jobs.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [JobsModule, UsersModule],
>>>>>>> a709e65632c7408e06b861c5ead5ca5a1f15e0dc
=======
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [AuthModule, TaskModule],
>>>>>>> aa25427e597f70f7a9356dac645004278e5842ec
  controllers: [],
  providers: [],
})
export class AppModule {}
