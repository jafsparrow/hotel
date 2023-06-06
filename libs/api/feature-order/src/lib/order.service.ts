import {
  ConflictException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
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
} from '@hotel/common/types';
import { PDFService } from './pdf.service';

@Injectable()
export class OrderService {
  constructor(
    private prismaService: PrismaService,
    private pdfService: PDFService
  ) {}

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
      console.log('created sample error');
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
        return await this.updateOrderItemsTable(
          newOrder,
          createOrderDto,
          false
        );
      }

      const existingOrder = await this.checkIfTableHasRunningOrder(
        createOrderDto.cartCreatedFor.firstName
      );
      if (!existingOrder) {
        const newOrder = await this.createTableOrder(createOrderDto, appUser);
        return await this.updateOrderItemsTable(
          newOrder,
          createOrderDto,
          false
        );
      } else {
        return await this.updateOrderItemsTable(
          existingOrder,
          createOrderDto,
          true
        );
      }
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

            OrderItems: {
              create: cartItems.map((cartItem) => {
                const orderItem = {
                  count: cartItem.count,
                  customeKey: cartItem.key ?? '',
                  name: cartItem.product.name,
                  orderId: orderId,
                  // OrderItemType: isRunning ? 'running' : 'new',
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
            id: true,
            createdAt: true,
            updatedUser: true,
            Kitchen: {
              select: {
                printer: true,
              },
            },

            OrderItems: true,
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

  private async checkIfTableHasRunningOrder(tableName: string) {
    try {
      const existingOrderFortheTable = await this.prismaService.order.findFirst(
        {
          where: {
            customerName: tableName,
            orderType: OrderType.TABLE,
          },
        }
      );

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
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
