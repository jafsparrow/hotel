import { PrismaService } from '@hotel/api/data-access-db';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateKitchenDto } from './dto/create-kitchen.dto';
import { getPrinters } from 'pdf-to-printer';

@Injectable()
export class KitchenService {
  constructor(private prismaService: PrismaService) {}
  async createKitchen(kitchen: CreateKitchenDto) {
    return await this.prismaService.kitchen.create({
      data: {
        name: kitchen.name,
        printer: kitchen.printer,
      },
    });
  }

  async udpateKitchen(id: number, data: CreateKitchenDto) {
    delete data.id;
    try {
      return this.prismaService.kitchen.update({
        where: { id },
        data: data,
      });
    } catch (error) {
      throw new BadRequestException({ error: error });
    }
  }
  async getKitchens() {
    return await this.prismaService.kitchen.findMany();
  }

  async getAvailablePrinters() {
    const printers = await getPrinters();
    return printers;
  }
}
