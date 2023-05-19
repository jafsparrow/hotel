import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ApiFeatureUserModule } from '@hotel/api/feature-user';

@Module({
  imports: [ApiFeatureUserModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class ApiFeatureAuthModule {}
