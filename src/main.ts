import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

function fnLoad(req: Request, res: Response, next: NextFunction) {
  console.log('root function middleware');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(fnLoad);
  await app.listen(3000);
}
bootstrap();
