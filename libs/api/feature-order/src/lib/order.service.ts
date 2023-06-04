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
} from './models';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}
  createsample(orderCreateDto: CreateOrderDto) {
    console.log('create sample alled');
    try {
      this.createOrder(orderCreateDto, {
        firstName: 'Jafar',
        userType: UserType.STAFF,
      });
    } catch (error) {
      return new BadRequestException(error);
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
      throw new BadRequestException(error);
    }
  }

  async createOrder(createOrderDto: CreateOrderDto, appUser: User) {
    try {
      if (createOrderDto.cartCreatedFor.userType == UserType.TAKEAWAY) {
        const newOrder = await this.createTakeAwayOrder(
          createOrderDto,
          appUser
        );
        if (!newOrder)
          throw new BadRequestException('could not create any new order..');
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

      const createdKots = [];

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
            Category: {
              select: {
                kitchen: true,
              },
            },
            OrderItems: true,
          },
        });

        // console.log(kotCreated);
        createdKots.push(kotCreated.id);
        await this.printKots(kotCreated);
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
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
