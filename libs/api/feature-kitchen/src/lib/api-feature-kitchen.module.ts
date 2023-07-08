import { Module } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { KitchenController } from './kitchen.controller';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [KitchenController],
  providers: [KitchenService],
  exports: [],
})
export class ApiFeatureKitchenModule {}
