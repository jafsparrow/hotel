import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/company.update.dto';
import { getPrinters, print } from 'pdf-to-printer';

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

  async getPrinters() {
    const printers = await getPrinters();
    // console.log(printers);
    const mappedArr = printers.map((item) => ({
      name: item.name,
      printer: item.name,
    }));
    return mappedArr;
  }
}
