import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
  constructor(private prismaService: PrismaService) {}

  async getReportStatsForThePeriod(startDate: Date, endDate: Date) {
    const ordersCount = await this.prismaService.order.count({
      where: {
        AND: [
          {
            createdAt: {
              gte: new Date('2023-06-27'),
            },
          },
          {
            createdAt: {
              lte: new Date('2023-06-28'),
            },
          },
        ],
      },
    });

    const start = new Date('2023-06-27');
    const end = new Date('2023-06-28');

    const ordersTotal: any = await this.prismaService
      .$queryRaw`select sum("amount" * "count") as totalSale from public."orderItem" where "orderId" in (
        select id from public."order" where "createdAt" >=  ${start} AND "createdAt" <=${end} )
        `;

    console.log('total', ordersTotal);
    console.log('prisma query', ordersCount);
    return this.toJson(ordersTotal);
    // console.log('orders count', ordersCount);
    // return { ordersCount, ordersTotal };
  }

  toJson(data: any) {
    return JSON.stringify(data, (_, v) =>
      typeof v === 'bigint' ? `${v}n` : v
    ).replace(/"(-?\d+)n"/g, (_, a) => a);
  }

  private async aggregate(startDate: Date, endDate: Date) {
    this.prismaService.orderItem.findMany({
      distinct: ['orderId'],
      where: {},
    });

    this.prismaService.orderItem.aggregate({
      _sum: {
        amount: true,
      },
    });

    // this.prismaService.orderItem.groupBy({
    //     by: ['orderId'],
    //     _sum: { amount: true},
    //     where:
    //         {AND: [
    //             {  : {gte: startDate}},
    //             {createdAt: {lte: endDate}}
    //         ]}

    // })
  }
}
