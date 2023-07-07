import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CacheService } from 'src/cache/cache.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  // providers: [UserService],
  // providers: [{ provide: 'userProvider', useClass: UserService }],
  // providers: [{ provide: 'userProvider', useClass: CacheService }],
  providers: [UserService, { provide: CacheService, useExisting: UserService }],
})
export class UserModule {}
