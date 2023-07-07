import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { CacheModule } from './cache/cache.module';
import { UserModule } from './user/user.module';
@Module({
  controllers: [],
  imports: [AccountModule, CacheModule, UserModule],
})
export class AppModule {}
