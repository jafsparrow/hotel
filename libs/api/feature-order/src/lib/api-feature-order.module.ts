import { Module } from '@nestjs/common';
import { OrderContoller } from './api-feature-order.controller';
import { OrderService } from './order.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { PDFService } from './pdf.service';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [OrderContoller],
  providers: [OrderService, PDFService],
  exports: [],
})
export class ApiFeatureOrderModule {}
