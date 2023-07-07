import { Module } from '@nestjs/common';
import { OrderContoller } from './api-feature-order.controller';
import { OrderService } from './order.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { PDFService } from './pdf.service';
import { PrintService } from './print.service';
import { ApiFeatureAuthModule } from '@hotel/api/feature-auth';

@Module({
  imports: [ApiDataAccessDbModule, ApiFeatureAuthModule],
  controllers: [OrderContoller],
  providers: [OrderService, PDFService, PrintService],
  exports: [PrintService],
})
export class ApiFeatureOrderModule {}
