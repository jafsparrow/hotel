import { Module } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';

@Module({
  controllers: [ApiDataAccessDbModule],
  providers: [KitchenService],
  exports: [],
})
export class ApiFeatureKitchenModule {}
