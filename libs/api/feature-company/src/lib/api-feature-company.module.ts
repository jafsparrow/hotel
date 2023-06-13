import { Module } from '@nestjs/common';
import { ApiFeatureCompanyController } from './api-feature-company.controller';
import { CompanyService } from './company.service';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [ApiFeatureCompanyController],
  providers: [CompanyService],
  exports: [],
})
export class ApiFeatureCompanyModule {}
