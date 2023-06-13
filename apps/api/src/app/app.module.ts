import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { ApiFeatureProductModule } from '@hotel/api/feature-product';
import { ApiFeatureCategoryModule } from '@hotel/api/feature-category';
import { ApiFeatureOrderModule } from '@hotel/api/feature-order';
import { ApiFeatureCompanyModule } from '@hotel/api/feature-company';

@Module({
  imports: [
    ApiDataAccessDbModule,
    ApiFeatureProductModule,
    ApiFeatureCategoryModule,
    ApiFeatureOrderModule,
    ApiFeatureCompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
