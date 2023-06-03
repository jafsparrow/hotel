import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { User, UserType } from '@hotel/orderapp/shared/data-access';

@Controller('orders')
export class OrderController {
  //   constructor(private orderService: OrderService) {}

  @Get()
  get() {
    return 'hello jafar';
  }

  @Post()
  createOrder(@Body() order: CreateOrderDto, @Req() req: any) {
    //   let user = req.user;
    const user: User = {
      firstName: 'Jafar',
      userType: UserType.STAFF,
    };
    console.log('from the front end', order);
    // return this.orderService.createOrder(order, user);
    // console.log(order);
    return 'beuatifyl';
  }
}
