import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService) {}

  async getCompanyDetails(id: number) {
    return await this.prismaService.company.findFirst();
  }
}
