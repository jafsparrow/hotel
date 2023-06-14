import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/company.update.dto';

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService) {}

  async getCompanyDetails(id: number) {
    return await this.prismaService.company.findFirst({
      include: {
        taxes: true,
      },
    });
  }

  async updateCompany(updateCompanyDto: UpdateCompanyDto) {
    console.log(updateCompanyDto);
    return await this.prismaService.company.update({
      where: { id: updateCompanyDto.id },
      data: updateCompanyDto,
    });
  }
}
