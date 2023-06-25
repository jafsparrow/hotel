import { CartItem } from './cart';
import { Customer } from './table';
import { AppliedTaxInfo } from './taxes';
import { User } from './user';
export interface OrderItem {
  count: number;
  modifiers?: string;

  status: OrderItemStatus;
  name?: string;
  kitchenUser?: User;
  key?: string;
  totalCountOfSameItem?: number;
  orderId?: string; //just to track what order it belongs.
  orderNumber?: number; // to track the order number
  orderItemType?: OrderItemType;
  amount?: number;
  customeKey?: string;
}

export interface OrderSummary {
  id: number;
  orderNumber?: number;
  createdAt?: Date;
  updatedAt?: Date;
  orderStatus: OrderStatus | string;
  orderItems?: OrderItem[];
  createdBy?: User;
  createdFor?: User;
  orderType?: string;
  customerName?: string | null;
  customer?: Customer;
  totalItemsCount?: number;
  totalQuantityCount?: number;
  appliedTaxes?: AppliedTaxInfo[];
  totalAmount?: number;
  taxedTotal?: number;
}

// export interface AppliedTax {
//   name: string;
//   taxValue: number;
// }

export enum OrderType {
  TABLE = 'table',
  TAKEAWAY = 'takeaway',
}

export enum OrderItemStatus {
  READY = 'ready',
  INPROGRESS = 'inprogress',
  WAITING = 'waiting',
}

export enum OrderStatus {
  PLACED = 'placed',
  INPROGRESS = 'inprogress',
  READY = 'ready',
  SERVED = 'served',
  PAID = 'paid',
}

export enum OrderItemType {
  NEW = 'new',
  RUNNING = 'running',
}

export enum PaymentStatus {
  PAID = 'paid',
  NOTPAID = 'notpaid',
}
