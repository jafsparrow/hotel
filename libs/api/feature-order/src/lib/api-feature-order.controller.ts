import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { User } from '@hotel/common/types';

import { JwtAuthGuard } from '@hotel/api/feature-auth';
import { OrderItemAddEditDto } from './dto/orderItems-add-edit.dto';
@Controller('orders')
export class OrderContoller {
  constructor(private orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getRecentOrders(@Req() req: any) {
    console.log('recent orders');
    const user = req.user;
    if (user.isCasher) {
      return this.orderService.getRecentOrders();
    }

    return this.orderService.getRecentOrdersByUser(user);
  }

  @Get('sampleBill')
  printsamplebill() {
    return this.orderService.testPrismaggregate(25);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  makeBillForTheOrder(@Body() data: any) {
    console.log('patch requrest for ', data);
    // return this.orderService.printReceipt(data.orderId);
    return this.orderService.makeBillForTheOrder(data.orderId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOrderDetails(@Param() params: any) {
    console.log('getting order details');
    const orderId = +params.id;

    return this.orderService.getOrderDetails(orderId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  post(@Body() order: CreateOrderDto, @Req() req: any) {
    const appUser: User = req.user;
    console.log('from the front end', order);
    return this.orderService.createOrder(order, appUser);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('updateItems/:id')
  updateOrderItems(@Body() data: OrderItemAddEditDto[], @Param() params: any) {
    console.log(data, params);
    const orderId = params.id;
    console.log('dto array', data);
    return 'hello world';
  }
}
