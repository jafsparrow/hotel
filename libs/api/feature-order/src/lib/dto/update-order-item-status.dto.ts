import {
  OrderItemStatus,
  OrderStatus,
} from '@hotel/orderapp/shared/data-access';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { UpdateOrderStatusDto } from './update-order-status.dto';

// export class UpdateOrderItemStatusDto extends UpdateOrderStatusDto {
//   @IsNotEmpty()
//   key!: string;

//   @IsNotEmpty()
//   orderItemStatus!: OrderItemStatus;

//   @IsOptional()
//   status?: OrderStatus;
// }
