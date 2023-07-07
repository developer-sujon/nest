import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { RouterModule } from '@nestjs/core';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { SubCategoriesModule } from './sub-categories/sub-categories.module';

@Module({
  imports: [
    CategoriesModule,
    SubCategoriesModule,
    BrandsModule,
    RouterModule.register([
      { path: 'products', module: CategoriesModule },
      { path: 'products', module: SubCategoriesModule },
      { path: 'products', module: BrandsModule },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
