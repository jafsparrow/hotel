import {
  ConflictException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '@hotel/api/data-access-db';
import { order, Prisma, orderItem, kitchen } from '@prisma/client';

import {
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

  async getRecentOrders(): Promise<OrderSummary[]> {
    // this. shoudl fetch orders of last 24 hours.
    return await this.prismaService.order.findMany({
      where: {
        createdAt: {
          gt: new Date('2023-06-05'),
        },
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
        orderItems: true,
        table: true,
        customer: true,
        user: true,
      },
    });

    // get CartItems total.
    const orderItems = order?.orderItems ? order.orderItems : [];
    const orderTotal = getOrderItemsTotal(orderItems as unknown as OrderItem[]);
    const taxAppliedTotalandInfo = getAppliedTaxesAndTaxesTotal(
      orderTotal,
      company?.taxes as unknown as Tax[]
    );
    // send to the print service.

    console.log('totally', taxAppliedTotalandInfo);
    const customerNameToPrint =
      order?.orderType == 'table'
        ? `${order.table!.name} - ${order.customer?.firstName}`
        : order?.customer?.firstName;
    const customerLastNameToPrint = order?.customer?.lastName
      ? order.customer.lastName
      : '';

    const infoToPrint = {
      companyName: company?.name,
      billType: order?.orderType == 'table' ? 'Dine In Bill' : 'Take Away Bill',
      orderNumber: `Order No- ${order?.orderNumber}`,
      paymentStatus:
        order?.paymentStatus == 'paid' ? '( PAID )' : '(NOT PAID  )',
      customerName: customerNameToPrint,
      lastName: customerLastNameToPrint,
      waiterName: order?.user.name,
      orderItems: order?.orderItems,
      total: orderTotal,
      appliedTaxesInfo: taxAppliedTotalandInfo.taxesApplied,
      taxedTotal: taxAppliedTotalandInfo.taxedTotal,
    };

    await this.pdfService.printReceipt(infoToPrint, 'CP-Q2');
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

  async getNextOrderNumber(): Promise<number> {
    try {
      const company = await this.prismaService.company.findFirst();
      if (!company) throw new Error('no company data found');
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
        await this.updateOrderItemsTable(newOrder, createOrderDto, false);
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
        await this.updateOrderItemsTable(existingOrder, createOrderDto, true);
        return existingOrder;
      } else {
        const newOrder = await this.createTableOrder(createOrderDto, appUser);
        await this.updateOrderItemsTable(newOrder, createOrderDto, false);
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
          createdUserId: 1,
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

      // const catViseOrderItems: { [x: string]: CartItem[] } = {};

      // orderItems1.forEach((orderItem) => {
      //   const catId = orderItem.product.categoryId.toString();

      //   catViseOrderItems[catId] = [
      //     ...(catViseOrderItems[catId] || []),
      //     orderItem,
      //   ];
      // });

      const createdKots = [];

      Object.entries(kitchenIdVice).forEach(async ([kitId, cartItems]) => {
        const kotCreated = await this.prismaService.kot.create({
          data: {
            kitchenId: +kitId,

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
            Kitchen: {
              select: {
                printer: true,
              },
            },

            orderItems: true,
          },
        });

        console.log(kotCreated);
        createdKots.push(kotCreated.id);
        // await this.printKots(kotCreated);
        await this.pdfService.printKot(kotCreated, order);
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   private async printKots(kot: {
  //     createdAt: Date;
  //     id: number;
  //     Category: {
  //         kitchen: Kitchen;
  //     } | null;
  //     OrderItems: OrderItem[];
  // }) {
  //     console.log('printer', kot.Category?.kitchen.printer);
  //     console.log('items', JSON.stringify(kot.OrderItems));

  //     const printerName = kot.Category?.kitchen.printer;
  //     const kotDetails =
  //   }

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
          createdUserId: 1,
        },
      });

      return newOrder;
    } catch (error) {
      throw new BadRequestException(error);
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
      return updatedOrder;
    } catch (error) {
      throw new Error('format later.');
    }
  }
}
