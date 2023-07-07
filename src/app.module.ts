import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { CacheModule } from './cache/cache.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
@Module({
  controllers: [],
  imports: [
    DatabaseModule,
    AccountModule,
    CacheModule,
    UserModule,
    ConfigModule,
  ],
})
export class AppModule {}
