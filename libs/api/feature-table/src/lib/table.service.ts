import { PrismaService } from '@hotel/api/data-access-db';
import { OrderStatus, PaymentStatus } from '@hotel/common/types';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';

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

  private formatData(data: CreateTableDto) {
    return {
      name: data.name,
      capacity: +data.capacity,
      floorId: +data.floorId,
    };
  }

  async createTable(data: CreateTableDto) {
    return await this.prismaService.table.create({
      data: this.formatData(data),
    });
  }

  async udpateTable(id: number, data: CreateTableDto) {
    try {
      return this.prismaService.table.update({
        where: { id },
        data: this.formatData(data),
      });
    } catch (error) {
      throw new BadRequestException({ error: error });
    }
  }
}
