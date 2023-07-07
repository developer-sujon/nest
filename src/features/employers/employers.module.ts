import { Module } from '@nestjs/common';
import { EmployersService } from './employers.service';
import { EmployersController } from './employers.controller';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [JobsModule],
  controllers: [EmployersController],
  providers: [EmployersService],
  exports: [JobsModule],
})
export class EmployersModule {}
