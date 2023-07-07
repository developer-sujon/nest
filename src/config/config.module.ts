import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { Config } from './Config';

@Module({
  controllers: [ConfigController],
  // providers: [{ provide: 'DB_URL', useValue: 'localhost:27017' }],
  providers: [{ provide: Config, useValue: Config }],
})
export class ConfigModule {}
