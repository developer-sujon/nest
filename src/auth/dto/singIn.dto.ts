import { IsNotEmpty } from 'class-validator';

export class singInDto {
  @IsNotEmpty()
  readonly mobile: string;

  @IsNotEmpty()
  readonly password: string;
}
