import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { ApiFeatureProductModule } from '@hotel/api/feature-product';
import { ApiFeatureCategoryModule } from '@hotel/api/feature-category';
import { ApiFeatureOrderModule } from '@hotel/api/feature-order';
import { ApiFeatureCompanyModule } from '@hotel/api/feature-company';
import { ApiFeatureTableModule } from '@hotel/api/feature-table';
import { ApiFeatureFloorModule } from '@hotel/api/feature-floor';

@Module({
  imports: [
    ApiDataAccessDbModule,
    ApiFeatureProductModule,
    ApiFeatureCategoryModule,
    ApiFeatureOrderModule,
    ApiFeatureCompanyModule,
    ApiFeatureTableModule,
    ApiFeatureFloorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
