import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/company.update.dto';

@Controller('company')
export class ApiFeatureCompanyController {
  constructor(private companyService: CompanyService) {}
  @Get()
  getCompanyDetails() {
    return this.companyService.getCompanyDetails(1);
  }

  @Post()
  updateCompany(@Body() companyUpdateDto: UpdateCompanyDto) {
    return this.companyService.updateCompany(companyUpdateDto);
  }

  @Get('printers')
  getConnectedPrinters() {
    return this.companyService.getPrinters();
  }
}
