import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { NextFunction, Request, Response } from 'express';

function fnLoad(req: Request, res: Response, next: NextFunction) {
  console.log('root module function middleware');
  next();
}

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(fnLoad).forRoutes('*');
  }
}
