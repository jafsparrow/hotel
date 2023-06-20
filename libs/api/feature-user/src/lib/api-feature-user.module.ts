import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { UserController } from './user.controller';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class ApiFeatureUserModule {}
