import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { Module } from '@nestjs/common';
import { StatController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [StatController],
  providers: [StatsService],
  exports: [StatsService],
})
export class ApiFeatureStatModule {}
