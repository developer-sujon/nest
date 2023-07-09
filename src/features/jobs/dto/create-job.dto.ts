import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsIn,
  IsOptional,
  IsInt,
  ArrayMinSize,
  IsBoolean,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { JobType } from '../constants/job.constants';

export class LocationDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsIn(Object.keys(JobType))
  @IsOptional()
  type: JobType;

  @IsInt()
  @IsNotEmpty()
  experience: number;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  salary: number;

  @IsString({ each: true })
  @ArrayMinSize(1)
  tags: string[];

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @ValidateNested()
  @IsObject()
  @Type(() => LocationDto)
  location: LocationDto;
}
