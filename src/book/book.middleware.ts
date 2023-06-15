import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class BookMiddleware implements NestMiddleware {
  use(_req: Request, _res: Response, next: NextFunction) {
    console.log('book middleware');
    next();
  }
}
