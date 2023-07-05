import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';
import { ProductStat } from '@hotel/common/types';

@Injectable()
export class StatsService {
  constructor(private prismaService: PrismaService) {}

  async getProductStatsForThePeriod(startDate: Date, endDate: Date) {
    const productStatArr: any[] = await this.prismaService.$queryRaw`select 
      subtab.totalCount count, products.name
      from (select sum("count") totalCount, "productId" from public."orderItem" orderItems
      where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startDate} AND "createdAt" <= ${endDate}) 
      group by "productId") subtab inner join 
      (select * from public."product") products
      ON subtab."productId" = products.id order by count desc;
    `;
    console.log(productStatArr);

    const formtted: ProductStat[] = productStatArr.map((item) => {
      const totalParsed = JSON.parse(this.toJson(item.count));
      const newTempItem = { name: item.name, count: totalParsed };
      return newTempItem;
    }) as unknown as ProductStat[];

    console.log(formtted);

    return formtted;
  }

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
