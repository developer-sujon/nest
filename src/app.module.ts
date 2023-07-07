import { Module } from '@nestjs/common';
import { ProductsModule } from './features/products/products.module';
import { UsersModule } from './features/users/users.module';

@Module({
  controllers: [],
  imports: [UsersModule, ProductsModule],
})
export class AppModule {}
