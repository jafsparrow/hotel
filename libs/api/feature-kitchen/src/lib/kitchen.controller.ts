import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { CreateKitchenDto } from './dto/create-kitchen.dto';

@Controller('kitchen')
export class KitchenController {
  constructor(private kitchenService: KitchenService) {}

  @Get()
  getKitchens() {
    return this.kitchenService.getKitchens();
  }

  @Post()
  createKitchen(@Body() params: CreateKitchenDto) {
    return this.kitchenService.createKitchen(params);
  }

  @Put(':id')
  updateKitchen(@Body() body: CreateKitchenDto, @Param('id') id: any) {
    const kitchenId = +id;
    console.log('kitchen id', kitchenId);
    return this.kitchenService.udpateKitchen(kitchenId, body);
  }
}
