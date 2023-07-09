import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  createJob(createJobDto: CreateJobDto) {
    return JSON.stringify(createJobDto);
  }
}
