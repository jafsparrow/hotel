import { PrismaService } from '@hotel/api/data-access-db';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async getCategory() {
    return await this.prismaService.category.findMany({
      include: {
        kitchen: true,
      },
    });
  }

  async createCategory(data: CreateCategoryDto) {
    const updatedData = {
      ...data,
      kitchenId: +data.kitchenId,
      categoryCode: +data.categoryCode,
    };
    return await this.prismaService.category.create({
      data: updatedData,
    });
  }

  async udpateCategory(id: number, data: CreateCategoryDto) {
    const updatedData = {
      ...data,
      kitchenId: +data.kitchenId,
      categoryCode: +data.categoryCode,
    };
    try {
      return this.prismaService.category.update({
        where: { id },
        data: updatedData,
      });
    } catch (error) {
      throw new BadRequestException({ error: error });
    }
  }
}
