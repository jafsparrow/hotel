import { Module } from '@nestjs/common';
import { PosSessionController } from './pos-session.controller';
import { PosSessionService } from './session.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { ApiFeatureAuthModule } from '@hotel/api/feature-auth';

@Module({
  controllers: [PosSessionController],
  imports: [ApiDataAccessDbModule, ApiFeatureAuthModule],
  providers: [PosSessionService],
  exports: [],
})
export class ApiFeaturePosSessionModule {}
