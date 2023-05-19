import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class ApiFeatureUserModule {}
