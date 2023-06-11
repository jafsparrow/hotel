import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async getCategory() {
    return await this.prismaService.category.findMany();
  }

  async createCategory(categoryDto: CreateCategoryDto) {
    return await this.prismaService.category.create({
      data: {
        name: categoryDto.name,
        color: categoryDto.color,
        kitchenId: categoryDto.kitchenId,
      },
    });
  }
}
