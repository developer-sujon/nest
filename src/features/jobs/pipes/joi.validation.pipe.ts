import { ObjectSchema } from 'joi';
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);

    console.log(error);

    if (error) {
      throw new BadRequestException({
        error: 'validation error',
        message: error.message.replace(/(\"|\[|\d\])/g, ''),
      });
    }

    return value;
  }
}
