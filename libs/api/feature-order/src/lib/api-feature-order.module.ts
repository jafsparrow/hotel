import { Module } from '@nestjs/common';
import { OrderContoller } from './api-feature-order.controller';
import { OrderService } from './order.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [OrderContoller],
  providers: [OrderService],
  exports: [],
})
export class ApiFeatureOrderModule {}
