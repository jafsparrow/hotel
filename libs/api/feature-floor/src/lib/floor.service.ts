import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FloorService {
  constructor(private prismaService: PrismaService) {}

  async getFloorTables(floorId: number) {
    return await this.prismaService.floor.findFirst({
      where: { id: floorId },
      select: { table: true },
    });
  }
}
