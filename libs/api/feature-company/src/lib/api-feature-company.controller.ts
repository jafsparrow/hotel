import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class ApiFeatureCompanyController {
  constructor(private companyService: CompanyService) {}
  @Get()
  getCompanyDetails() {
    return this.companyService.getCompanyDetails(1);
  }
}
