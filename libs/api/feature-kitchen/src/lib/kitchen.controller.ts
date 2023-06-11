import { Body, Controller, Get, Post } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { CreateKitchenDto } from './dto/create-kitchen.dto';

@Controller('kitchen')
export class KitchenController {
  constructor(private kitchenService: KitchenService) {}

  @Get('printer')
  getPrineters() {
    return;
  }

  @Get()
  getKitchens() {
    return this.kitchenService;
  }

  @Post()
  createKitchen(@Body() params: CreateKitchenDto) {
    return this.kitchenService.createKitchen(params);
  }
}
