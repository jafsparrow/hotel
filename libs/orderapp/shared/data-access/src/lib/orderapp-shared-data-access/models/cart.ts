import { Modifier, Product } from './product';
import { Tax } from './taxes';
import { User } from './user';

export interface CartItem {
  count: number;
  product: Product;
  modifiers?: Modifier[];
  key?: string;
}

export interface Cart {
  createdAt?: Date;
  cartCreatedFor?: User | null;
  cartItems: { [key: string]: CartItem };
  placeOrderSpinner: boolean;
  createdBy?: User;
  taxes?: Tax[];
  note?: string;
}
