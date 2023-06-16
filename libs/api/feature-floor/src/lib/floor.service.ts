import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FloorService {
  constructor(private prismaService: PrismaService) {}

  async getFloors() {
    return await this.prismaService.floor.findMany();
  }

  async getFloorTables(floorId: number) {
    return await this.prismaService.floor.findFirst({
      where: { id: floorId },
      select: {
        id: true,
        tables: {
          include: {
            orders: {
              where: {
                NOT: { orderStatus: 'paid' },
              },
              include: {
                customer: true,
              },
            },
          },
        },
      },
    });
  }
}
