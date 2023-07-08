import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';
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

  async getKitchens() {
    return await this.prismaService.kitchen.findMany();
  }

  async getAvailablePrinters() {
    const printers = await getPrinters();
    return printers;
  }
}
