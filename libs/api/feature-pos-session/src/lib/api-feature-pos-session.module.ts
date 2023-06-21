import { Module } from '@nestjs/common';
import { PosSessionController } from './pos-session.controller';
import { PosSessionService } from './session.service';

@Module({
  controllers: [PosSessionController],
  providers: [PosSessionService],
  exports: [],
})
export class ApiFeaturePosSessionModule {}
