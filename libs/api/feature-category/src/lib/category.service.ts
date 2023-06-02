import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async getCategory() {
    return await this.prismaService.category.findMany();
  }
}
