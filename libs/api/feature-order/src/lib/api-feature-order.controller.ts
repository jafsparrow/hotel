import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderContoller {
  constructor(private orderService: OrderService) {}
  @Get()
  get() {
    return 'jafar';
  }

  @Post()
  post(@Body() order: CreateOrderDto) {
    // return 'hello';

    console.log('from the front end', order);
    return this.orderService.createsample(order);
    // console.log(order);
    return 'beuatifyl';
  }
}
