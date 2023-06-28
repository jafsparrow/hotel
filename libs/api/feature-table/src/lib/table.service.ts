import { PrismaService } from '@hotel/api/data-access-db';
import { OrderStatus, PaymentStatus } from '@hotel/common/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService {
  constructor(private prismaService: PrismaService) {}
  async getTables() {
    return await this.prismaService.table.findMany({
      include: {
        tableSeats: true,
        orders: {
          where: {
            NOT: { paymentStatus: PaymentStatus.PAID },
          },
          select: { id: true },
        },
      },
    });
  }

  // async getFloorTables(floorId: number) {
  //   return await this.prismaService.floor.findFirst({
  //     where: { id: floorId },
  //     include: { tables: true },
  //   });
  // }
}
