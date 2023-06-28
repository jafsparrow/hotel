import {
  ConflictException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '@hotel/api/data-access-db';
import { order, Prisma, orderItem, kitchen } from '@prisma/client';

import {
  dateTimeNowMinus,
  dateTimeToDateHHMM,
  getAppliedTaxesAndTaxesTotal,
  getOrderItemsTotal,
} from '@hotel/common/util';
import {
  CartItem,
  OrderItemStatus,
  OrderItemType,
  OrderStatus,
  OrderType,
  PaymentStatus,
  User,
  UserType,
  OrderSummary,
  Tax,
  OrderItem,
} from '@hotel/common/types';
import { PDFService } from './pdf.service';

@Injectable()
export class OrderService {
  constructor(
    private prismaService: PrismaService,
    private pdfService: PDFService
  ) {}

  async testPrismaggregate(orderID: number) {
    const result = await this.prismaService.orderItem.groupBy({
      by: ['customeKey'],
      where: { orderId: orderID },
      _sum: { count: true },
    });

    return result;

    // const resultArr: any[] = [];

    // result.map(async (item) => {
    //   const dbItem = await this.prismaService.orderItem.findFirst({
    //     where: { id: item.id },
    //   });
    //   console.log('inside the map');
    //   resultArr.push({ sum: item._sum, ...dbItem });
    //   return dbItem;
    // });

    // return await Promise.all(
    //   result.map(async (item) => {
    //     const dbItem = await this.prismaService.orderItem.findFirst({
    //       where: { id: item.id },
    //     });
    //     console.log('inside the map');
    //     resultArr.push({ sum: item._sum, ...dbItem });
    //     return { ...dbItem, count: item._sum.count };
    //   })
    // );

    // return resultArr;

    // return result.map(async (item) => {
    //   const ordreItem = await this.prismaService.orderItem.findFirst({
    //     where: { id: item.id, orderId: orderID },
    //   });

    //   return { ...ordreItem, item };
    // });
  }

  async getRecentNotPaidOrders(): Promise<OrderSummary[]> {
    console.log(dateTimeNowMinus(24));
    // this. shoudl fetch orders of last 24 hours.
    return await this.prismaService.order.findMany({
      where: {
        createdAt: {
          gt: dateTimeNowMinus(24),
        },
        NOT: { paymentStatus: PaymentStatus.PAID },
      },
    });
  }

  async getRecentOrders(): Promise<OrderSummary[]> {
    console.log(dateTimeNowMinus(24));
    // this. shoudl fetch orders of last 24 hours.
    return await this.prismaService.order.findMany({
      where: {
        createdAt: {
          gt: dateTimeNowMinus(24),
        },
      },
    });
  }

  async getRecentOrdersByUser(user: User): Promise<OrderSummary[]> {
    console.log(dateTimeNowMinus(24));
    // this. shoudl fetch orders of last 24 hours.
    return await this.prismaService.order.findMany({
      where: {
        createdAt: {
          gt: dateTimeNowMinus(24),
        },
        createdUserId: user.id,
      },
    });
  }

  async getRecentNotPaidOrdersByUser(user: User): Promise<OrderSummary[]> {
    console.log(dateTimeNowMinus(24));
    // this. shoudl fetch orders of last 24 hours.
    return await this.prismaService.order.findMany({
      where: {
        createdAt: {
          gt: dateTimeNowMinus(24),
        },
        createdUserId: user.id,
        NOT: { paymentStatus: PaymentStatus.PAID },
      },
    });
  }

  async getOrderDetails(orderId: number) {
    // const date = new Date();
    // const stringDate = date.toISOString().substring(0, 10);
    // return await this.prismaService.order.findMany({
    //   where: {
    //     createdAt: {
    //       gt: new Date(stringDate),
    //     },
    //   },
    // });

    return await this.prismaService.order.findUnique({
      where: { id: orderId },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                secondaryLanguageName: true,
              },
            },
          },
        },
      },
    });
  }

  async printReceipt(orderId: number) {
    await this.prismaService.orderItem.aggregate({
      where: { orderId: orderId },
      _sum: { amount: true },
    });
    // get company id from appUser.
    const companyId = 1;

    const company = await this.prismaService.company.findFirst({
      where: { id: companyId },
      include: {
        taxes: true,
      },
    });

    //  get order with order items.

    const order = await this.prismaService.order.findFirst({
      where: { id: orderId },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
        table: true,
        customer: true,
        user: true,
      },
    });

    const { orderItems, totalCount, totalItems, orderTotal } =
      await this.getOrderItemsForTheOrderAggregated(orderId);

    // const orderTotal = getOrderItemsTotal(orderItems as unknown as OrderItem[]);
    const taxAppliedTotalandInfo = getAppliedTaxesAndTaxesTotal(
      orderTotal,
      company?.taxes as unknown as Tax[]
    );
    // send to the print service.
    const customerNameToPrint =
      order?.orderType == 'table'
        ? `${order.table!.name} - ${order.customer?.firstName}`
        : order?.customer?.firstName;
    const customerLastNameToPrint = order?.customer?.lastName
      ? order.customer.lastName
      : '';

    const mappedOrderItems = orderItems.map((orderItem) => {
      return {
        ...orderItem,
        amount: orderItem!.amount!.toFixed(3),
        otherLanguageName: orderItem.product!.secondaryLanguageName,
        individualTotal: (orderItem.count * orderItem!.amount!).toFixed(3),
      };
    });
    console.log(mappedOrderItems.length);
    const infoToPrint = {
      companyName: company?.name,
      billDateTime: dateTimeToDateHHMM(order!.createdAt),
      billType: order?.orderType == 'table' ? 'Dine In Bill' : 'Take Away Bill',
      orderNumber: `Order No- ${order?.orderNumber}`,
      paymentStatus:
        order?.paymentStatus == 'paid' ? '( PAID )' : '(NOT PAID  )',
      orderTypeTitle:
        order?.orderType == 'table' ? 'Table Info' : 'Customer Info',
      customerName: customerNameToPrint,
      lastName: customerLastNameToPrint,
      waiterName: order?.user.name,
      orderItems: mappedOrderItems,
      total: orderTotal.toFixed(3),
      appliedTaxesInfo: taxAppliedTotalandInfo.taxesApplied,
      taxedTotal: taxAppliedTotalandInfo.taxedTotal,
      totalCount,
      totalItems,
    };

    await this.pdfService.printReceipt(infoToPrint, 'CP-Q2');
    return order;
    return 'Recipt printer successfully.';
  }

  async printSampleBill() {
    return this.pdfService.samplebill();
  }

  async createsample(orderCreateDto: CreateOrderDto) {
    console.log('create sample alled');
    try {
      return await this.createOrder(orderCreateDto, {
        firstName: 'Jafar',
        userType: UserType.STAFF,
      });
    } catch (error) {
      console.log('created sample error', error);
      throw new BadRequestException(error);
    }
  }

  async waitRandom() {
    const random = Math.random() * 1000;
    console.log('random number is ', random);
    return new Promise((resolve) => {
      setTimeout(resolve, random);
    });
  }

  async getNextOrderNumber(): Promise<number> {
    try {
      const company = await this.prismaService.company.findFirst();
      if (!company) throw new Error('no company data found');

      // the followind line is temporary fix for concurrency company
      // update error. postgres would not have this error, still keeping the code here.s
      await this.waitRandom();

      await this.prismaService.company.update({
        where: {
          id: company?.id,
        },
        data: {
          lastOrderNumber: company?.lastOrderNumber + 1,
        },
      });

      return company?.lastOrderNumber + 1;
    } catch (error) {
      console.log('next order number error');
      throw new BadRequestException(error);
    }
  }

  async createOrder(createOrderDto: CreateOrderDto, appUser: User) {
    console.log('user is', appUser);
    try {
      if (createOrderDto.cartCreatedFor.userType == UserType.TAKEAWAY) {
        const newOrder = await this.createTakeAwayOrder(
          createOrderDto,
          appUser
        );
        if (!newOrder)
          throw new BadRequestException('could not create any new order..');

        console.log('order has been created.', newOrder);
        await this.updateOrderItemsTable(
          newOrder,
          createOrderDto,
          false,
          appUser
        );
        return newOrder;
      }
      const tableId = createOrderDto.tableId;
      if (createOrderDto.customerId) {
        const customerId = createOrderDto.customerId;
        console.log('existing ordre', `${tableId} = ${customerId}`);
        const existingOrder = await this.checkIfTableHasRunningOrder(
          tableId,
          customerId
        );

        if (!existingOrder) throw new Error();
        await this.updateOrderItemsTable(
          existingOrder,
          createOrderDto,
          true,
          appUser
        );
        return existingOrder;
      } else {
        const newOrder = await this.createTableOrder(createOrderDto, appUser);
        await this.updateOrderItemsTable(
          newOrder,
          createOrderDto,
          false,
          appUser
        );
        return newOrder;
      }
      // no customer is assigned for this.
      // this mean a new cusotmer should be created along with the orders.
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
  private async createTakeAwayOrder(
    createOrderDto: CreateOrderDto,
    appUser: User
  ) {
    try {
      const nextOrderId = await this.getNextOrderNumber();
      const newOrder = await this.prismaService.order.create({
        data: {
          customerName: createOrderDto.cartCreatedFor.firstName,
          orderNumber: nextOrderId,
          orderStatus: OrderStatus.INPROGRESS,
          orderType: OrderType.TAKEAWAY,
          paymentStatus: PaymentStatus.NOTPAID,
          createdUserId: appUser.id!,
        },
      });

      console.log('prisma is creating data');
      return newOrder;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  private async updateOrderItemsTable(
    order: order,
    createOrderDto: CreateOrderDto,
    isRunning: boolean,
    appUser: User
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

      // get all the categories with the kitchen name.
      const categories = await this.prismaService.category.findMany({
        select: {
          id: true,
          kitchen: true,
        },
      });

      const kitchenIdVice: { [x: string]: CartItem[] } = {};
      const kitchenTempArra = [];
      orderItems1.forEach((orderItem) => {
        const catId = orderItem.product.categoryId;

        const kitchenDetail = categories.find(
          (cat) => cat.id === catId
        )?.kitchen;
        kitchenTempArra.push(kitchenDetail);
        const kitId = kitchenDetail?.id ?? 'noPrinter';
        kitchenIdVice[kitId] = [...(kitchenIdVice[kitId] || []), orderItem];
      });

      const createdKots: any[] = [];
      // promise .all is need to handle the wait for the writes to kot table to avoid error.
      await Promise.all(
        Object.entries(kitchenIdVice).map(async ([kitId, cartItems]) => {
          const kotCreated = await this.prismaService.kot.create({
            data: {
              kitchenId: +kitId,
              updatedUserId: appUser.id!,

              orderItems: {
                create: cartItems.map((cartItem) => {
                  const orderItem = {
                    count: cartItem.count,
                    customeKey: cartItem.key ?? '',
                    name:
                      cartItem.product.name +
                      (cartItem.variant ? '-' + cartItem.variant.name : ''),
                    orderId: orderId,
                    amount: this.getCartItemTotal(cartItem),
                    productId: cartItem.product.id,
                    // OrderItemType: isRunning ? 'running' : 'new',
                    modifiers: cartItem.modifiers
                      ? cartItem.modifiers?.reduce(
                          (prev, curr) => prev.concat(curr.description, ', '),
                          ''
                        )
                      : '',
                  };
                  return orderItem;
                }),
              },
            },
            select: {
              id: true,
              createdAt: true,
              updatedUser: true,
              Kitchen: true,

              orderItems: true,
            },
          });

          console.log(kotCreated);
          createdKots.push(kotCreated);
          // await this.printKots(kotCreated);
        })
      );

      createdKots.forEach((kot) => {
        const kotData = this.createKOTData(kot, order, appUser);

        // not waiting for the print service to finsh. optimization.
        this.pdfService.printKot(kotData);
      });

      // Object.entries(kitchenIdVice).forEach(async ([kitId, cartItems]) => {
      //   const kotCreated = await this.prismaService.kot.create({
      //     data: {
      //       kitchenId: +kitId,
      //       updatedUserId: appUser.id!,

      //       orderItems: {
      //         create: cartItems.map((cartItem) => {
      //           const orderItem = {
      //             count: cartItem.count,
      //             customeKey: cartItem.key ?? '',
      //             name:
      //               cartItem.product.name +
      //               (cartItem.variant ? '-' + cartItem.variant.name : ''),
      //             orderId: orderId,
      //             amount: this.getCartItemTotal(cartItem),
      //             productId: cartItem.product.id,
      //             // OrderItemType: isRunning ? 'running' : 'new',
      //             modifiers: cartItem.modifiers
      //               ? cartItem.modifiers?.reduce(
      //                   (prev, curr) => prev.concat(curr.description, ', '),
      //                   ''
      //                 )
      //               : '',
      //           };
      //           return orderItem;
      //         }),
      //       },
      //     },
      //     select: {
      //       id: true,
      //       createdAt: true,
      //       updatedUser: true,
      //       Kitchen: true,

      //       orderItems: true,
      //     },
      //   });

      //   console.log(kotCreated);
      //   createdKots.push(kotCreated.id);
      //   // await this.printKots(kotCreated);
      //   const kotData = this.createKOTData(kotCreated, order, appUser);
      //   await this.pdfService.printKot(kotData);
      // });
      return order;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  private createKOTData(
    kot: {
      createdAt: Date;
      updatedUser: any;
      orderItems: orderItem[];
      Kitchen: kitchen | null;
      id: number;
    },
    order: order,
    user: User
  ) {
    const updatedData = {
      kitchenName: kot.Kitchen!.name ? kot.Kitchen!.name : 'KITCHEN',
      printer: kot.Kitchen!.printer,
      ticketId: `KOT- ${kot.id}`,
      billDate: dateTimeToDateHHMM(kot.createdAt),
      orderNumber: `Order No- ${order?.orderNumber}`,
      orderTypeTitle:
        order?.orderType == 'table' ? 'Table Info' : 'Customer Info',

      kotType: order?.orderType == 'table' ? 'Dine In KOT' : 'Take Away KOT',
      tableNumber: order.customerName,
      waiterName: user.name,
      orderItems: kot.orderItems,
      numberOfItems: kot.orderItems.length.toString() ?? '',
      quantity:
        kot.orderItems
          .reduce((prev, item) => prev + item.count, 0)
          .toString() ?? '',
    };

    return updatedData;
  }
  private getCartItemTotal(cartItem: CartItem) {
    let productPrice = cartItem.variant
      ? cartItem.variant.price
      : cartItem.product.price;
    if (cartItem.modifiers) {
      productPrice =
        productPrice +
        cartItem.modifiers.reduce((prev, modifier) => prev + modifier.price, 0);
    }
    return productPrice;
  }

  private async checkIfTableHasRunningOrder(
    tableId: number,
    customerId: number
  ) {
    try {
      const existingOrderFortheTable = await this.prismaService.order.findFirst(
        {
          where: {
            customerId: customerId,
            tableId: tableId,
            orderType: OrderType.TABLE,
            NOT: {
              orderStatus: OrderStatus.PAID,
            },
          },
        }
      );

      console.log('existing order', existingOrderFortheTable);

      return existingOrderFortheTable;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  private async createTableOrder(
    createOrderDto: CreateOrderDto,
    appUser: User
  ) {
    try {
      const tableId = createOrderDto.tableId;
      const nextOrderId = await this.getNextOrderNumber();
      const newCustomer = await this.prismaService.customer.create({
        data: {
          firstName: createOrderDto.cartCreatedFor.firstName,
          lastName: createOrderDto.cartCreatedFor.lastName
            ? createOrderDto.cartCreatedFor.lastName
            : 'no',
        },
      });

      const newOrder = await this.prismaService.order.create({
        data: {
          customerName: createOrderDto.cartCreatedFor.firstName,
          customerId: newCustomer.id,
          tableId: tableId,
          orderNumber: nextOrderId,
          orderStatus: OrderStatus.INPROGRESS,
          orderType: OrderType.TABLE,
          paymentStatus: PaymentStatus.NOTPAID,
          createdUserId: appUser.id!,
        },
      });

      return newOrder;
    } catch (error) {
      throw new BadRequestException({
        errorMessage: 'Could not create new order.',
      });
    }
  }

  async makeBillForTheOrder(orderId: number) {
    // check if the order is in in progress status. no need as front end takes care of it.

    try {
      const updatedOrder = await this.prismaService.order.update({
        where: { id: orderId },
        data: {
          orderStatus: OrderStatus.SERVED,
          paymentStatus: PaymentStatus.NOTPAID,
        },
        include: {
          orderItems: {
            include: {
              product: {
                select: {
                  secondaryLanguageName: true,
                },
              },
            },
          },
        },
      });
      console.log('updated order', updatedOrder);
      this.printReceipt(orderId);
      return updatedOrder;
    } catch (error) {
      throw new Error('format later.');
    }
  }

  async payTheBill(orderId: number) {
    // check if the order is in in progress status. no need as front end takes care of it.

    try {
      const updatedOrder = await this.prismaService.order.update({
        where: { id: orderId },
        data: {
          paymentStatus: PaymentStatus.PAID,
        },
        include: {
          orderItems: {
            include: {
              product: {
                select: {
                  secondaryLanguageName: true,
                },
              },
            },
          },
        },
      });
      console.log('updated order', updatedOrder);
      this.printReceipt(orderId);
      return updatedOrder;
    } catch (error) {
      throw new Error('format later.');
    }
  }
  private async getOrderItemsForTheOrderAggregated(orderId: number): Promise<{
    orderItems: OrderItem[];
    totalCount: number;
    totalItems: number;
    orderTotal: number;
  }> {
    let totalItems = 0;
    let totalCount = 0;
    let orderTotal = 0;
    const result = await this.prismaService.orderItem.groupBy({
      by: ['customeKey'],
      where: { orderId },
      _sum: { count: true },
    });

    const aggregatedOrderItems = await Promise.all(
      result.map(async (item) => {
        const dbItem = await this.prismaService.orderItem.findFirst({
          where: { customeKey: item.customeKey, orderId },
          include: { product: true },
        });
        const updateOrderItemWithCount = {
          ...dbItem,
          count: item._sum.count,
        } as unknown as OrderItem | null;

        console.log(updateOrderItemWithCount);
        totalItems = totalItems + 1;
        orderTotal =
          orderTotal +
          updateOrderItemWithCount!.amount! * updateOrderItemWithCount!.count!;
        totalCount = totalCount + updateOrderItemWithCount!.count!;

        return updateOrderItemWithCount;
      })
    );

    const agregated = {
      orderItems: aggregatedOrderItems as OrderItem[],
      totalCount: totalCount,
      totalItems: totalItems,
      orderTotal,
    };
    return agregated;
  }

  async updateOrderItemsForTheOrder(orderId: number, orderItems: OrderItem[]) {
    try {
      // await this.prismaService.orderItem.cre;/
      console.log('order id is', orderId);
      console.log('order details', orderItems);
    } catch (error) {
      console.log('erro while updating orerItems.');
    }
  }
}
