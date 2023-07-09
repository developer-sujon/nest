import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     disableErrorMessages: true,
  //     enableDebugMessages: true,
  //     whitelist: true,
  //     skipMissingProperties: true,
  //     stopAtFirstError: true,
  //   }),
  // );

  await app.listen(3000);
}
bootstrap();
