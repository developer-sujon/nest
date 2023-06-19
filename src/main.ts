import { NestFactory } from '@nestjs/core';
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

  await app.listen(3000);
}
bootstrap();
