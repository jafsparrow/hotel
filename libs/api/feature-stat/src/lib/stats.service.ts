import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';
import { ProductStat, StaffStat } from '@hotel/common/types';

@Injectable()
export class StatsService {
  constructor(private prismaService: PrismaService) {}

  async getProductStatsForThePeriod(startDateTime: Date, endDateTime: Date) {
    const startTimeISO = startDateTime.toISOString();
    const endTimeISO = endDateTime.toISOString();
    const productStatArr: any[] = await this.prismaService.$queryRaw`
    select foo."name", foo."count" ,  round(foo."count" * 100 /(
	select sum(hello."count") from (
		select subtab.totalCount count, products.name, products.id
      from 
	  (select sum("count") totalCount, "productId" from public."orderItem" orderItems
      where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startTimeISO}::timestamp AND "createdAt" < ${endTimeISO}::timestamp) 
	   
      group by "productId") subtab inner join 
      (select * from public."product") products
      ON subtab."productId" = products.id  order by count desc
	) hello
) , 2) as "percentage" from 
(
	select subtab.totalCount count, products.name, products.id
      from 
	  (select sum("count") totalCount, "productId" from public."orderItem" orderItems
      where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startTimeISO}::timestamp  AND "createdAt" < ${endTimeISO}::timestamp) 
	   
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

  async getReportStatsForThePeriod(startDateTime: Date, endDateTime: Date) {
    console.log('start dateTime', startDateTime);
    console.log('end dateTime', endDateTime);
    const startTimeISO = startDateTime.toISOString();
    const endTimeISO = endDateTime.toISOString();
    const orderStatArr: any = await this.prismaService
      .$queryRaw`select sum(tempt.totalAmount), count(tempt."orderId"), orders."paystat" as paystat from 
      (select sum(items.count * items.amount) as totalAmount, items."orderId" from public."orderItem" items  group by items."orderId" ) tempt
      inner join
      (select id, "paymentStatus" as paystat from public."order" 
       where "createdAt" >=  ${startTimeISO}::timestamp 
       AND "createdAt" < ${endTimeISO} :: timestamp) orders 
       on orders.id=tempt."orderId" group by paystat
     `;

    console.log('result is', orderStatArr);

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

  async getStaffStatsForThePeriod(startDateTime: Date, endDateTime: Date) {
    const startTimeISO = startDateTime.toISOString();
    const endTimeISO = endDateTime.toISOString();

    const staffStatArr: any[] = await this.prismaService.$queryRaw`
    select sectionT."totCount", users."name", users.id from 
    (select tempt.totalCount as "totCount", tempt."createdUserId" as "userId" from 
    (select count(id) totalCount,  "createdUserId", "paymentStatus"
    from public."order" orders 
    where  "createdAt" >= ${startTimeISO}::timestamp  AND "createdAt" < ${endTimeISO} :: timestamp
    group by  orders."paymentStatus", orders."createdUserId"  ) 
    tempt ) sectionT
    inner join (select * from public."user") users
    on users.id = sectionT."userId" order by sectionT."totCount" desc
    `;

    const staffStat: StaffStat[] = staffStatArr.map((item) => {
      return {
        name: item.name,
        id: item.id,
        orderCount: JSON.parse(this.toJson(item.totCount)),
      };
    });

    return staffStat;
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
