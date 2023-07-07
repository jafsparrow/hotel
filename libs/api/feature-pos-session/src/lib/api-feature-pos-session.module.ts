import { Module } from '@nestjs/common';
import { PosSessionController } from './pos-session.controller';
import { PosSessionService } from './session.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { ApiFeatureAuthModule } from '@hotel/api/feature-auth';
import { ApiFeatureStatModule } from '@hotel/api/feature-stat';
import { ApiCommonModule } from '@hotel/api/common';
import { SessionReportService } from './report.service';

@Module({
  controllers: [PosSessionController],
  imports: [
    ApiDataAccessDbModule,
    ApiFeatureAuthModule,
    ApiFeatureStatModule,
    ApiCommonModule,
  ],
  providers: [PosSessionService, SessionReportService],
  exports: [],
})
export class ApiFeaturePosSessionModule {}
