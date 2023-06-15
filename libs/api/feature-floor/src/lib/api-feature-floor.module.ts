import { Module } from '@nestjs/common';
import { FloorController } from './floor.controller';
import { FloorService } from './floor.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [FloorController],
  providers: [FloorService],
  exports: [],
})
export class ApiFeatureFloorModule {}
