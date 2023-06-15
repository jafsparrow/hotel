import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { TableService } from './table.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [TableController],
  providers: [TableService],
  exports: [],
})
export class ApiFeatureTableModule {}
