import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
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
    return this.orderService.testPrismaggregate(11);
  }

  @Patch()
  makeBillForTheOrder(@Body() data: any) {
    console.log('patch requrest for ', data);
    return this.orderService.printReceipt(data.orderId);
    return this.orderService.makeBillForTheOrder(data.orderId);
  }

  @Get(':id')
  getOrderDetails(@Param() params: any) {
    console.log('getting order details');
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
