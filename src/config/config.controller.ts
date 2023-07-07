import { Controller, Inject } from '@nestjs/common';
import { ConfigService } from './config.service';
import { Config } from './Config';

@Controller('config')
export class ConfigController {
  // constructor(@Inject('DB_URL') private readonly dbUrl: string) {
  //   console.log(dbUrl);
  // }

  constructor(private readonly config: Config) {
    console.log(Config);
  }
}
