import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { EmployersModule } from './features/employers/employers.module';
import { AccountsModule } from './features/accounts/accounts.module';

@Module({
  controllers: [],
  imports: [UsersModule, EmployersModule, AccountsModule],
})
export class AppModule {}
