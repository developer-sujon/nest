import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { createJobSchema } from './pipes/create.job.schema';

import { JobsService } from './jobs.service';
import { JoiValidationPipe } from './pipes/joi.validation.pipe';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createJobSchema))
  createJob(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.createJob(createJobDto);
  }
}
