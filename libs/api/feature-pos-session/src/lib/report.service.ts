import { PuppeteerService } from '@hotel/api/common';
import { PrismaService } from '@hotel/api/data-access-db';
import { StatsService } from '@hotel/api/feature-stat';
import { PaymentStatus } from '@hotel/common/types';
import {
  dateTimeToDateHHMM,
  getOnlyCurrentDateWithoutTime,
} from '@hotel/common/util';
import { BadGatewayException, Injectable } from '@nestjs/common';

@Injectable()
export class SessionReportService {
  constructor(
    private prismaService: PrismaService,
    private statService: StatsService,
    private pupeteerService: PuppeteerService
  ) {}
  async downloadSessionReport(sessionId: number) {
    try {
      // get the start and end date of the session Id.
      const session = await this.getSessionDetails(sessionId);
      console.log('creating pdf for the session status of ', sessionId);
      if (!session) return;
      const startTime = session.startTime;
      const endTime = session.endTime!;
      const initialCash = session.initialCash;

      const reportSummary = await this.statService.getReportStatsForThePeriod(
        startTime,
        endTime
      );

      const prductSummary = await this.statService.getProductStatsForThePeriod(
        startTime,
        endTime
      );

      const staffSummary = await this.statService.getStaffStatsForThePeriod(
        startTime,
        endTime
      );

      const formattedStartTime = dateTimeToDateHHMM(startTime);
      const formattedEndTime = dateTimeToDateHHMM(endTime);
      const currentDayOnlyDate = getOnlyCurrentDateWithoutTime();
      // console.log('product summary', prductSummary);
      const { ordersStatArr, totalOrderDetail, totalCashSale } =
        this.formatOrderStat(reportSummary);
      const htmlInputData: any = {
        date: currentDayOnlyDate,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
        initialCash: initialCash.toFixed(3),
        totalCashSale: totalCashSale.toFixed(3),
        productStatArr: prductSummary,
        ordersStatArr,
        totalOrderDetail,
        stafStatArr: staffSummary.length ? staffSummary : [],
      };
      const pdfStream: Buffer = await this.pupeteerService.getReportPdfStream(
        'sessionSummary',
        'views',
        'pdf',
        'sessionEndsummary.report.html',
        htmlInputData
      );
      return {
        pdfStream,
        reportName: `session report - ${startTime} -- ${endTime}`,
      };
    } catch (error) {
      console.log(error);
      throw new BadGatewayException({ error });
    }
  }

  async getSessionDetails(sessionId: number) {
    return await this.prismaService.posSession.findUnique({
      where: { id: sessionId },
    });
  }

  private formatOrderStat(orderStat: any[]) {
    let totalOrders = 0;
    let totalOrderSum = 0;
    let totalCashSale = 0;
    const mappedOrders = orderStat.map((item) => {
      let description = '';
      switch (item.paystat) {
        case PaymentStatus.CREDIT:
          description = 'Credit Orders';
          break;
        case PaymentStatus.PAID:
          description = 'Paid Orders';
          totalCashSale = totalCashSale + item.sum;
          break;
        case PaymentStatus.NOTPAID:
          description = 'Non Settled Orders';
          break;
        default:
          console.log(item.paystat);
          break;
      }
      totalOrders = totalOrders + item.count;
      totalOrderSum = totalOrderSum + item.sum;
      return {
        description: description,
        count: item.count,
        sum: item.sum.toFixed(3),
      };
    });

    const totalOrderDetail = {
      description: 'Total Orders',
      count: totalOrders,
      totalOrderSum: totalOrderSum.toFixed(3),
    };

    console.log();

    return { ordersStatArr: mappedOrders, totalOrderDetail, totalCashSale };
  }
}
