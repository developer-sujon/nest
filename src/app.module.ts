import { Module } from '@nestjs/common';
import { EnvModule } from './config/env.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './features/auth/auth.module';
import { TasksModule } from './features/tasks/tasks.module';
import { UserModule } from './features/user/user.module';
import { TokenModule } from './features/token/token.module';

@Module({
  imports: [EnvModule, DatabaseModule, TokenModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
