import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
=======
import { ValidationPipe } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

function fnLoad(req: Request, res: Response, next: NextFunction) {
  console.log('root function middleware');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(fnLoad);
  app.useGlobalPipes(new ValidationPipe());
>>>>>>> aa25427e597f70f7a9356dac645004278e5842ec

  await app.listen(3000);
}
bootstrap();
