import { ConflictException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '@hotel/api/data-access-db';
import { Order, Prisma, OrderItem, Kitchen } from '@prisma/client';
import {
  CartItem,
  OrderItemStatus,
  OrderItemType,
  OrderStatus,
  OrderType,
  PaymentStatus,
  User,
  UserType,
} from './models';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}
  createsample(orderCreateDto: CreateOrderDto) {
    console.log('create sample alled');
    this.createOrder(orderCreateDto, {
      firstName: 'Jafar',
      userType: UserType.STAFF,
    });
  }

  async getNextOrderNumber(): Promise<number> {
    const company = await this.prismaService.company.findFirst();
    if (!company) throw new Error('no company data found');
    console.log('company data found');
    await this.prismaService.company.update({
      where: {
        id: company?.id,
      },
      data: {
        lastOrderNumber: company?.lastOrderNumber + 1,
      },
    });

    console.log('company data updated');

    return company?.lastOrderNumber + 1;
  }

  async createOrder(createOrderDto: CreateOrderDto, appUser: User) {
    console.log('calling create order');
    // check if it is take away.
    if (createOrderDto.cartCreatedFor.userType == UserType.TAKEAWAY) {
      console.log('creating for takeaway');
      const newOrder = await this.createTakeAwayOrder(createOrderDto, appUser);
      console.log('takeaway order created successfully');
      if (!newOrder) return;
      await this.updateOrderItemsTable(newOrder, createOrderDto, false);
      return 'ordercreated success fully ';
    }

    console.log('running for table roder createion');
    // check existing order
    const existingOrder = await this.checkIfTableHasRunningOrder(
      createOrderDto.cartCreatedFor.firstName
    );
    if (!existingOrder) {
      const newOrder = await this.createTableOrder(createOrderDto, appUser);
      await this.updateOrderItemsTable(newOrder, createOrderDto, false);
      return 'ordercreated success fully ';
    }

    console.log('updating the cartiems for the table order new');
    await this.updateOrderItemsTable(existingOrder, createOrderDto, true);
    return 'cart created successfully';
  }
  private async createTakeAwayOrder(
    createOrderDto: CreateOrderDto,
    appUser: User
  ) {
    try {
      const nextOrderId = await this.getNextOrderNumber();
      console.log('after getting company data');
      const newOrder = await this.prismaService.order.create({
        data: {
          customerName: createOrderDto.cartCreatedFor.firstName,
          orderNumber: nextOrderId,
          orderStatus: OrderStatus.INPROGRESS,
          orderType: OrderType.TAKEAWAY,
          paymentStatus: PaymentStatus.NOTPAID,
          createdUserId: 1,
        },
      });

      console.log('prisma is creating data');
      return newOrder;
    } catch (error) {
      console.log(error);
    }
  }

  private async createKot(categoryId: string, items: CartItem[]) {
    const category = await this.prismaService.category.findFirst({
      where: { id: +categoryId },
      include: {
        kitchen: {
          select: { printer: true },
        },
      },
    });

    category?.kitchen.printer;
  }

  private async updateOrderItemsTable(
    order: Order,
    createOrderDto: CreateOrderDto,
    isRunning: boolean
  ) {
    try {
      const orderId = order.id;
      // split order items into cateogry.
      const orderItems1 = Object.entries(createOrderDto.cartItems).map(
        (itemArr) => {
          const key = itemArr[0];
          const items = itemArr[1];

          const item: CartItem = {
            ...items,
            key,
          };
          return item;
        }
      );

      const catViseOrderItems: { [x: string]: CartItem[] } = {};

      orderItems1.forEach((orderItem) => {
        const catId = orderItem.product.categoryId.toString();

        catViseOrderItems[catId] = [
          ...(catViseOrderItems[catId] || []),
          orderItem,
        ];
      });

      // console.log('categoryvice', catViseOrderItems);

      Object.entries(catViseOrderItems).forEach(async ([catId, cartItems]) => {
        const kotCreated = await this.prismaService.kot.create({
          data: {
            categoryId: +catId,
            OrderItems: {
              create: cartItems.map((cartItem) => {
                const orderItem = {
                  count: cartItem.count,
                  customeKey: cartItem.key ?? '',
                  name: cartItem.product.name,
                  orderId: orderId,
                  OrderItemType: isRunning ? 'running' : 'new',
                  modifiers: cartItem.modifiers
                    ? cartItem.modifiers?.reduce(
                        (prev, curr) => prev.concat(', ', curr.description),
                        ''
                      )
                    : '',
                };
                return orderItem;
              }),
            },
          },
          select: {
            Category: {
              select: {
                kitchen: true,
              },
            },
            OrderItems: true,
          },
        });

        console.log(kotCreated);
        await this.printKots(kotCreated);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private async printKots(kot: {
    Category: {
      kitchen: Kitchen;
    } | null;
    OrderItems: OrderItem[];
  }) {
    console.log('printer', kot.Category?.kitchen.printer);
    console.log('items', JSON.stringify(kot.OrderItems));
  }
  private async updateOrderItemsTable11(
    order: Order,
    createOrderDto: CreateOrderDto,
    isRunning: boolean
  ) {
    const orderItems = Object.entries(createOrderDto.cartItems).map(
      (itemArr) => {
        const key = itemArr[0];
        const items = itemArr[1];
        const appliedModifiers = items.modifiers
          ? items.modifiers?.reduce(
              (prev, curr) => prev.concat(', ', curr.description),
              ''
            )
          : '';

        const item: Prisma.OrderItemUncheckedCreateInput = {
          count: items.count,
          customeKey: key,
          kotNumber: 11,
          modifiers: appliedModifiers,
          name: items.product.name,
          orderItemType: isRunning ? OrderItemType.RUNNING : OrderItemType.NEW,
          status: OrderItemStatus.INPROGRESS,
          orderId: order.id,
        };
        return item;
      }
    );

    orderItems.forEach(
      async (item) => await this.prismaService.orderItem.create({ data: item })
    );

    // split order items into cateogry.
    const orderItems1 = Object.entries(createOrderDto.cartItems).map(
      (itemArr) => {
        const key = itemArr[0];
        const items = itemArr[1];

        const item: CartItem = {
          ...items,
          key,
        };
        return item;
      }
    );

    const catViseOrderItems: { [x: string]: CartItem[] } = {};

    orderItems1.forEach((orderItem) => {
      const catId = orderItem.product.categoryId.toString();

      catViseOrderItems[catId] = [
        ...(catViseOrderItems[catId] || []),
        orderItem,
      ];
    });

    console.log('categoryvice', catViseOrderItems);

    // Object.entries(catViseOrderItems).forEach(async (itemArr) => {});
  }
  private async checkIfTableHasRunningOrder(tableName: string) {
    const existingOrderFortheTable = await this.prismaService.order.findFirst({
      where: {
        customerName: tableName,
        orderType: OrderType.TABLE,
      },
    });

    return existingOrderFortheTable;
  }

  private async createTableOrder(
    createOrderDto: CreateOrderDto,
    appUser: User
  ) {
    const nextOrderId = await this.getNextOrderNumber();

    const newOrder = await this.prismaService.order.create({
      data: {
        customerName: createOrderDto.cartCreatedFor.firstName,
        orderNumber: nextOrderId,
        orderStatus: OrderStatus.INPROGRESS,
        orderType: OrderType.TABLE,
        paymentStatus: PaymentStatus.NOTPAID,
        createdUserId: 1,
      },
    });

    return newOrder;
  }
}

// if table order check if existing non paid orders are ON.
// if there is, get the current order number update the cartItems are running items and update database.
// }
// async createOrder(orderDto: CreateOrderDto, appUser: User) {
//   const orderItems: OrderItem[] = Object.keys(orderDto.cartItems).map(
//     (key) => ({
//       ...orderDto.cartItems[key],
//       key,
//       status: OrderItemStatus.WAITING,
//       orderItemType: OrderItemType.NEW,
//     })
//   );
//   // console.log(orderItems);

//   const existingNonPaidOrdersForTheTable =
//     await this.orderRepository.getNotPaidOrdersForTheTable(
//       orderDto.cartCreatedFor.username
//     );

//   if (existingNonPaidOrdersForTheTable.length > 1) {
//     throw new ConflictException(
//       'Table cannot have more than one non paid orders'
//     );
//   }

//   const existingOrder: Order = existingNonPaidOrdersForTheTable[0];

//   if (existingOrder) {
//     //  update the order with order item marked as running.
//     let updatedOrderItems = orderItems.map((item) => ({
//       ...item,
//       orderItemType: OrderItemType.RUNNING,
//     }));

//     let orderDataToUpdate = {
//       total: parseInt(orderDto.total.toString()) + existingOrder.total,
//       taxedTotal:
//         parseInt(orderDto.taxedTotal.toString()) + existingOrder.taxedTotal,
//       orderItems: [...existingOrder.orderItems, ...updatedOrderItems],
//       note: orderDto.note + existingOrder.note,
//     };

//     return await this.orderRepository.updateOrder(
//       existingOrder._id as unknown as ObjectId,
//       orderDataToUpdate
//     );
//   }

//   //  at this point the table does not have any existing non paid orders
//   let cloneUser = { ...appUser, company: appUser.companyId };

//   let newOrder = {
//     createdBy: cloneUser,
//     createdFor: orderDto.cartCreatedFor,
//     total: orderDto.total,
//     taxedTotal: orderDto.taxedTotal,
//     orderItems: orderItems,
//     status: OrderStatus.PLACED,
//     note: orderDto.note,
//     taxesApplied: orderDto.taxesApplied,
//   };

//   return this.orderRepository.createOrder(newOrder);
// }

// async findOrdersOfTheday() {
//   return await this.orderRepository.findOrderOfTheDay();
// }

// updateOrderStatus(updatingUser: User, data: UpdateOrderStatusDto) {
//   return this.orderRepository.updateOrderStatus(updatingUser, data);
// }

// updateOrderItemStatus(updatingUser: User, data: UpdateOrderItemStatusDto) {
//   return this.orderRepository.updateOrderItemStatus(updatingUser, data);
// }
