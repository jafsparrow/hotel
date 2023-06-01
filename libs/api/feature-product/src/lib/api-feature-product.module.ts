import {
  ApiDataAccessDbModule,
  PrismaService,
} from '@hotel/api/data-access-db';
import { Module } from '@nestjs/common';
import { ApiFeatureProductController } from './api-feature-product.controller';
import { ProductService } from './products.service';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [ApiFeatureProductController],
  providers: [ProductService],
  exports: [],
})
export class ApiFeatureProductModule {}
