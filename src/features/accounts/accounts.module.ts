import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { EmployersModule } from '../employers/employers.module';

@Module({
  imports: [EmployersModule],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
