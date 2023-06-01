import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { ApiFeatureProductModule } from '@hotel/api/feature-product';

@Module({
  imports: [ApiDataAccessDbModule, ApiFeatureProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
