import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderContoller {
  constructor(private orderService: OrderService) {}
  @Get()
  getRecentOrders() {
    console.log('recent orders');
    return this.orderService.getRecentOrders();
  }

  @Get('sampleBill')
  printsamplebill() {
    this.orderService.printSampleBill();
  }

  @Get(':id')
  getOrderDetails(@Param() params: any) {
    const orderId = +params.id;

    return this.orderService.getOrderDetails(orderId);
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
