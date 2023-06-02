import { CartItem, User } from '@hotel/orderapp/shared/data-access';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsDefined()
  @IsNotEmpty()
  cartItems!: { [key: string]: CartItem };

  cartCreatedFor!: User;

  total!: number;

  @IsOptional()
  note?: string;

  taxesApplied!: [];

  taxedTotal!: number;
}
