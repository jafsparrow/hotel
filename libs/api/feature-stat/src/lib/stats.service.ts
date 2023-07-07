import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';
import { ProductStat } from '@hotel/common/types';

@Injectable()
export class StatsService {
  constructor(private prismaService: PrismaService) {}

  async getProductStatsForThePeriod(startDate: Date, endDate: Date) {
    const productStatArr: any[] = await this.prismaService.$queryRaw`
    select foo."name", foo."count" ,  round(foo."count" * 100 /(
	select sum(hello."count") from (
		select subtab.totalCount count, products.name, products.id
      from 
	  (select sum("count") totalCount, "productId" from public."orderItem" orderItems
      where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startDate} AND "createdAt" <= ${endDate}) 
	   
      group by "productId") subtab inner join 
      (select * from public."product") products
      ON subtab."productId" = products.id  order by count desc
	) hello
) , 2) as "percentage" from 
(
	select subtab.totalCount count, products.name, products.id
      from 
	  (select sum("count") totalCount, "productId" from public."orderItem" orderItems
      where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startDate}  AND "createdAt" <= ${endDate}) 
	   
      group by "productId") subtab inner join 
      (select * from public."product") products
      ON subtab."productId" = products.id  order by count desc
) foo group by foo."name", foo."count" order by foo."count" desc
    `;

    // console.log(productStatArr);

    const formtted: ProductStat[] = productStatArr.map((item) => {
      const totalParsed = JSON.parse(this.toJson(item.count));
      const newTempItem = {
        name: item.name,
        count: totalParsed,
        percentage: item.percentage,
      };
      return newTempItem;
    }) as unknown as ProductStat[];

    // console.log(formtted);

    return formtted;
  }

  async getReportStatsForThePeriod(startDate: Date, endDate: Date) {
    const orderStatArr: any = await this.prismaService
      .$queryRaw`select sum(tempt.totalAmount), count(tempt."orderId"), orders."paystat" as paystat from (select sum(items.count * items.amount) as totalAmount, items."orderId" from public."orderItem" items  group by items."orderId" ) tempt
      inner join
      (select id, "paymentStatus" as paystat from public."order" 
       where "createdAt" >=  ${startDate} 
       AND "createdAt" <= ${endDate}) orders 
       on orders.id=tempt."orderId" group by paystat
     `;

    const orderStat: any[] = orderStatArr.map((item: any) => {
      return {
        sum: item.sum,
        count: JSON.parse(this.toJson(item.count)),
        paystat: item.paystat,
      };
    });

    return orderStat;
    // const ordersTotal: any = await this.prismaService
    //   .$queryRaw`select sum("amount" * "count") as totalSale from public."orderItem" where "orderId" in (
    //     select id from public."order" where "createdAt" >=  ${startDate} AND "createdAt" <=${endDate} )
    //     `;

    // return this.toJson(ordersTotal);
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

// Products and count sold for the duration
// const productStatArrs: any[] = await this.prismaService.$queryRaw`select
// subtab.totalCount count, products.name
// from (select sum("count") totalCount, "productId" from public."orderItem" orderItems
// where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startDate} AND "createdAt" <= ${endDate})
// group by "productId") subtab inner join
// (select * from public."product") products
// ON subtab."productId" = products.id order by count desc;
// `;

// const orderStatArr: any = await this.prismaService
// .$queryRaw`select sum(tempu.totalAmount) as sum, count(tempu."orderId") as count from (select sum(items.count * items.amount) as totalAmount,
// items."orderId" from public."orderItem" items  group by items."orderId" ) tempu
// inner join
// (select id from public."order"
// where "createdAt" >=  ${startDate}
// AND "createdAt" <= ${endDate}) orders
// on orders.id=tempu."orderId"
// `;
