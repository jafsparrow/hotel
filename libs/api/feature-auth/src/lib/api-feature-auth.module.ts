import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ApiFeatureUserModule } from '@hotel/api/feature-user';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ApiFeatureUserModule, ApiDataAccessDbModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [LocalStrategy],
})
export class ApiFeatureAuthModule {}
